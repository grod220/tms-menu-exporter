import { MultiLanguageText } from './index';

export interface TimePeriod {
  start_time: string;
  end_time: string;
}

export interface ServiceAvailability {
  day_of_week: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  time_periods: TimePeriod[];
}

export interface Menu {
  id: string;
  title: MultiLanguageText;
  subtitle?: MultiLanguageText;
  service_availability: ServiceAvailability[];
  category_ids: string[];
}
