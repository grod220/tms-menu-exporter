import { Menu } from './@types/uber-eats/menu';
import { ICategory, IDish, IMenuVersion, IOptionItem, IOptions } from './@types/contentful';
import { SERVICE_AVAILABILITIES } from './menu-constants';
import { EntireMenu } from './@types/uber-eats';
import { Category } from './@types/uber-eats/category';
import { Item } from './@types/uber-eats/item';
import { ModifierGroup } from './@types/uber-eats/modifier-group';
import { AllContentfulData } from './contentful-transforms';

const convertToUberMenus = (contentfulMenus: IMenuVersion[]): Menu[] => {
  return contentfulMenus.map((menu) => ({
    id: menu.sys.id,
    title: {
      translations: {
        en: menu.sys.type,
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
        en: category.sys.type,
      },
    },
    entities: category.fields.menuItems.map((menuItem) => ({
      id: menuItem.sys.id,
      type: 'ITEM',
    })),
  }));
};

const convertToUberItems = (contentfulItems: (IDish | IOptionItem)[]): Item[] => {
  return contentfulItems.map((item) => ({
    id: item.sys.id,
    title: {
      translations: {
        en: item.sys.type,
      },
    },
    description: {
      translations: {
        en: item.fields.description,
      },
    },
    price_info: {
      price: item.fields.price * 100,
      overrides: [],
    },
    tax_info: {
      tax_rate: 7,
    },
  }));
};

const convertToUberModifiers = (contentfulModifiers: IOptions[]): ModifierGroup[] => {
  return contentfulModifiers.map((modifier) => ({
    id: modifier.sys.id,
    title: {
      translations: {
        en: modifier.sys.type,
      },
    },
    quantity_info: {
      quantity: {
        min_permitted: modifier.fields.minimum,
        max_permitted: modifier.fields.maximum,
      },
    },
    modifier_options: [...modifier.fields.optionItem, ...modifier.fields.pricedOptionItems].map((item) => ({
      id: item.sys.id,
      type: 'MODIFIER_GROUP',
    })),
  }));
};

export const convertToUberEntireMenu = (allContentfulData: AllContentfulData): EntireMenu => {
  return {
    menus: convertToUberMenus(allContentfulData.allMenuVersions),
    categories: convertToUberCategories(allContentfulData.allCategories),
    items: convertToUberItems([...allContentfulData.allMenuItems, ...allContentfulData.allOptionItems]),
    modifier_groups: convertToUberModifiers(allContentfulData.allOptions),
    display_options: {
      disable_item_instructions: true,
    },
  };
};
