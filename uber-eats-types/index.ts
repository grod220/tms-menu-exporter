import { Menu } from './menu';
import { Category } from './category';
import { Item } from './item';
import { ModifierGroup } from './modifier-group';

export interface EntireMenu {
  menus: Menu[];
  categories: Category[];
  items: Item[];
  modifier_groups: ModifierGroup[];
  display_options: {
    disable_item_instructions: boolean;
  };
}

export interface MultiLanguageText {
  translations: {
    en?: string;
    en_us?: string;
  };
}
