import { MultiLanguageText } from './index';

export interface MenuEntity {
  id: string;
  type?: 'ITEM' | 'MODIFIER_GROUP'; // optional diverts from docs
}

export interface Category {
  id: string;
  title: MultiLanguageText;
  subtitle?: MultiLanguageText;
  entities: MenuEntity[];
}
