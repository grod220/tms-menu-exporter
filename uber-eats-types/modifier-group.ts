import { MultiLanguageText } from './index';
import { QuantityConstraintRules } from './item';
import { MenuEntity } from './category';

export interface ModifierGroup {
  id: string;
  external_data?: string;
  title: MultiLanguageText;
  quantity_info?: QuantityConstraintRules;
  modifier_options: MenuEntity[];
  display_type?: 'expanded' | 'collapsed';
}
