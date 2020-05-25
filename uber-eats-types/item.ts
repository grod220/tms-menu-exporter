import { MultiLanguageText } from './index';

type ContextType = 'MENU' | 'ITEM' | 'MODIFIER_GROUP' | number; // number diverts from docs

interface PriceOverride {
  context_type: ContextType;
  context_value: string;
  price: number; // cents
}

interface PriceRules {
  price: number; // cents
  overrides: PriceOverride[];
}

interface QuantityConstraint {
  min_permitted?: number;
  max_permitted?: number;
  default_quantity?: number;
  charge_above?: number;
  refund_under?: number;
}

interface QuantityConstraintOverride {
  context_type: ContextType;
  context_value: string;
  quantity: QuantityConstraint;
}

export interface QuantityConstraintRules {
  quantity?: QuantityConstraint; // optional diverts from docs
  overrides?: QuantityConstraintOverride[];
}

interface Suspension {
  suspend_until: number;
  reason?: string; // optional diverts from docs
}

interface SuspensionOverride {
  context_type: ContextType;
  context_value: string;
  suspension: Suspension;
}

interface SuspensionRules {
  suspension?: Suspension;
  overrides?: SuspensionOverride[];
}

interface ModifierGroupsOverride {
  context_type: ContextType;
  context_value: string;
  ids: string[];
}

interface ModifierGroupsRules {
  ids: string[];
  overrides: ModifierGroupsOverride[];
}

interface TaxInfo {
  tax_rate?: number;
  vat_rate_percentage?: number;
}

interface EnergyInfo {
  lower_range: number;
  upper_range: number;
  display_type: 'single_item' | 'double_items' | 'additive_item' | 'multiple_items';
}

interface NutritionalInfo {
  // nulls not in docs
  calories?: EnergyInfo;
  kilojoules?: EnergyInfo;
  allergens?: EnergyInfo; // not in docs
}

interface DishInfo {
  // optional diverts from docs
  classifications?: {
    can_serve_alone?: boolean;
    is_vegetarian?: boolean;
    alcoholic_items?: number;
  };
}

interface TimePeriod {
  start_time: string;
  end_time: string;
}

interface VisibilityInfo {
  hours: {
    start_date: string;
    end_date: string;
    hours_of_week: {
      day_of_week: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
      time_periods: TimePeriod;
    };
  };
}

type CategoryLabel =
  | 'CAT_PREPARED_FOOD'
  | 'CAT_DELI_PLATTER'
  | 'CAT_FOOD_BY_WT_VOL'
  | 'CAT_SANDWICH'
  | 'CAT_PREPACKAGED_FOOD'
  | 'CAT_ICECREAM'
  | 'CAT_SNACK'
  | 'CAT_CANDY'
  | 'CAT_ALCOHOL'
  | 'CAT_JUICE'
  | 'TRAIT_PCT_100'
  | 'TRAIT_UNFLV_UNSWT'
  | 'CAT_WATER'
  | 'TRAIT_NONCARB'
  | 'TRAIT_FLV_SWT'
  | 'CONTAINER_BOTTLED'
  // below are not in docs
  | 'TRAIT_CARB'
  | 'CAT_PREPARED_DRINK';

type TemperatureLabel = 'TEMP_HEATED' | 'TEMP_UNHEATED' | 'TEMP_COLD';

interface TaxLabelsRuleSet {
  default_value: {
    labels: Array<TemperatureLabel | CategoryLabel>;
    source: 'MANUAL' | number; // number diverts from docs
  };
}

export interface Item {
  id: string;
  external_data?: string;
  title: MultiLanguageText;
  description?: MultiLanguageText;
  image_url?: string;
  price_info: PriceRules;
  quantity_info?: QuantityConstraintRules;
  suspension_info?: SuspensionRules;
  modifier_group_ids?: ModifierGroupsRules;
  tax_info: TaxInfo;
  nutritional_info?: NutritionalInfo; // optional diverts from docs
  dish_info?: DishInfo; // optional diverts from docs
  visibility_info?: VisibilityInfo; // optional diverts from docs
  tax_label_info?: TaxLabelsRuleSet;
}
