import { Menu } from './@types/uber-eats/menu';
import { ICategory, IDish, IMenuVersion, IOptionItem, IOptions } from './@types/contentful';
import { SERVICE_AVAILABILITIES } from './menu-constants';
import { EntireMenu } from './@types/uber-eats';
import { Category } from './@types/uber-eats/category';
import { Item, TemperatureLabel } from './@types/uber-eats/item';
import { ModifierGroup } from './@types/uber-eats/modifier-group';
import { AllContentfulData } from './contentful-transforms';

const convertToUberMenus = (contentfulMenus: IMenuVersion[]): Menu[] => {
  const MENU_SORT_ORDER = ['Meat', 'Vegetarian', 'Vegan', 'Gluten Free'];
  const menuComparator = (a: IMenuVersion, b: IMenuVersion): number => {
    return MENU_SORT_ORDER.indexOf(a.fields.type) - MENU_SORT_ORDER.indexOf(b.fields.type);
  };
  return contentfulMenus.sort(menuComparator).map((menu) => ({
    id: menu.sys.id,
    title: {
      translations: {
        en: menu.fields.type,
      },
    },
    service_availability: SERVICE_AVAILABILITIES,
    category_ids: menu.fields.categories.map((category) => category.sys.id),
  }));
};

const convertToUberCategories = (contentfulCategories: ICategory[]): Category[] => {
  return contentfulCategories.map((category) => ({
    id: category.sys.id,
    title: {
      translations: {
        en: category.fields.title.split('#').shift().trim(),
      },
    },
    entities: category.fields.menuItems.map((menuItem) => ({
      id: menuItem.sys.id,
      type: 'ITEM',
    })),
  }));
};

const convertToUberItems = (
  contentfulItems: (IDish | IOptionItem)[],
  freeModifierGroups: ItemsToFreeModifiers,
): Item[] => {
  return contentfulItems.map((item) => {
    const itemObj: Item = {
      id: item.sys.id,
      title: {
        translations: {
          en: item.fields.title.split('#').shift().trim(),
        },
      },
      description: {
        translations: {
          en: item.fields.description,
        },
      },
      price_info: {
        price: item.fields.price * 100,
        overrides: freeModifierGroups[item.sys.id]
          ? freeModifierGroups[item.sys.id].map((id) => ({
              context_type: 'MODIFIER_GROUP',
              context_value: id,
              price: 0,
            }))
          : [],
      },
      tax_info: {
        tax_rate: 7,
      },
      tax_label_info: {
        default_value: {
          labels: [`TEMP_${item.fields.temperature[0].toUpperCase()}` as TemperatureLabel],
          source: 'MANUAL',
        },
      },
    };
    if ('options' in item.fields) {
      itemObj.modifier_group_ids = {
        ids: item.fields.options.map((option) => option.sys.id),
        overrides: [],
      };
    }
    if ('submitImageToUber' in item.fields && item.fields.submitImageToUber) {
      itemObj.image_url = `https:${item.fields.image.fields.file.url}`;
    }
    return itemObj;
  });
};

const convertToUberModifiers = (contentfulModifiers: IOptions[]): ModifierGroup[] => {
  return contentfulModifiers.map((modifier) => ({
    id: modifier.sys.id,
    title: {
      translations: {
        en: modifier.fields.title.split('#').shift().trim(),
      },
    },
    quantity_info: {
      quantity: {
        min_permitted: modifier.fields.minimum,
        max_permitted: modifier.fields.maximum,
      },
    },
    modifier_options: [...(modifier.fields.freeOptionItem || []), ...(modifier.fields.pricedOptionItems || [])].map(
      (item) => ({
        id: item.sys.id,
        type: 'MODIFIER_GROUP',
      }),
    ),
  }));
};

type ItemsToFreeModifiers = Record<string, string[]>;

const getFreeModifierGroupIds = (allOptions: IOptions[]): ItemsToFreeModifiers => {
  const toReturn = {};
  allOptions
    .filter((option) => option.fields.freeOptionItem)
    .forEach((option) => {
      option.fields.freeOptionItem.forEach((optionItem) => {
        if (!toReturn[optionItem.sys.id]) {
          toReturn[optionItem.sys.id] = [];
        }
        toReturn[optionItem.sys.id].push(option.sys.id);
      });
    });
  return toReturn;
};

export const convertToUberEntireMenu = (allContentfulData: AllContentfulData): EntireMenu => {
  const freeModifierGroups = getFreeModifierGroupIds(allContentfulData.allOptions);

  return {
    menus: convertToUberMenus(allContentfulData.allMenuVersions),
    categories: convertToUberCategories(allContentfulData.allCategories),
    items: convertToUberItems(
      [...allContentfulData.allMenuItems, ...allContentfulData.allOptionItems],
      freeModifierGroups,
    ),
    modifier_groups: convertToUberModifiers(allContentfulData.allOptions),
    display_options: {
      disable_item_instructions: true,
    },
  };
};
