import { EntireMenu } from '../index';

const A: EntireMenu = {
  menus: [
    {
      id: 'Specials',
      title: {
        translations: {
          en: 'Specials',
        },
      },
      service_availability: [
        {
          day_of_week: 'monday',
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
        },
        {
          day_of_week: 'tuesday',
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
        },
        {
          day_of_week: 'wednesday',
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
        },
        {
          day_of_week: 'thursday',
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
        },
        {
          day_of_week: 'friday',
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
        },
        {
          day_of_week: 'saturday',
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
        },
        {
          day_of_week: 'sunday',
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
        },
      ],
      category_ids: ['Specials_83717'],
    },
  ],
  categories: [
    {
      id: 'Specials_83717',
      title: {
        translations: {
          en: 'Specials',
        },
      },
      entities: [
        {
          id: 'Best_Burger',
        },
      ],
    },
  ],
  items: [
    {
      id: 'Best_Burger',
      title: {
        translations: {
          en: 'Extra Big Burger',
        },
      },
      description: {
        translations: {
          en: 'Sauce, habenero hot sauce, pickles and white bread',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/ec499511-89f6-48b8-8ea5-165b7817e7b3.jpeg',
      price_info: {
        price: 100,
        overrides: [],
      },
      tax_info: {},
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
  ],
  modifier_groups: null,
  display_options: {
    disable_item_instructions: false,
  },
};

const B: EntireMenu = {
  items: [],
  display_options: {
    disable_item_instructions: true,
  },
  menus: [
    {
      service_availability: [],
      category_ids: [],
      id: 'empty_menu',
      title: {
        translations: {
          en_us: '',
        },
      },
    },
  ],
  categories: [],
  modifier_groups: [],
};

const C: EntireMenu = {
  items: [
    {
      description: {
        translations: {
          en_us: 'Deliciously roasted beans',
        },
      },
      title: {
        translations: {
          en_us: 'Coffee',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {},
      external_data: 'External data for coffee',
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: ['Add-milk', 'Add-sugar'],
      },
      image_url: null,
      price_info: {
        price: 300,
        overrides: [],
      },
      tax_info: {
        tax_rate: 8,
        vat_rate_percentage: null,
      },
      id: 'Coffee',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Blueberry',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-flavor',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: 'External data for blueberry flavor',
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-flavor',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: 8,
        vat_rate_percentage: null,
      },
      id: 'Blueberry',
    },
    {
      description: {
        translations: {
          en_us: 'Great for afternoon snack time!',
        },
      },
      title: {
        translations: {
          en_us: 'Fresh-baked muffin',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {},
      external_data: 'External data for muffin',
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: ['Choose-flavor'],
      },
      image_url: null,
      price_info: {
        price: 300,
        overrides: [],
      },
      tax_info: {
        tax_rate: 8,
        vat_rate_percentage: null,
      },
      id: 'Muffin',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Sugar',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Add-sugar',
            quantity: {
              max_permitted: 2,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: 'External data for sugar',
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Add-sugar',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: 8,
        vat_rate_percentage: null,
      },
      id: 'Sugar',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Chocolate deluxe',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-flavor',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: 'External data for chocolate deluxe flavor',
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 50,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-flavor',
            price: 50,
          },
        ],
      },
      tax_info: {
        tax_rate: 8,
        vat_rate_percentage: null,
      },
      id: 'Chocolate-deluxe',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Milk',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Add-milk',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: 'External data for milk',
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Add-milk',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: 8,
        vat_rate_percentage: null,
      },
      id: 'Milk',
    },
    {
      description: {
        translations: {
          en_us: 'A soothing cuppa',
        },
      },
      title: {
        translations: {
          en_us: 'Tea',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {},
      external_data: 'External data for tea',
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: ['Add-milk', 'Add-sugar'],
      },
      image_url: null,
      price_info: {
        price: 250,
        overrides: [],
      },
      tax_info: {
        tax_rate: 8,
        vat_rate_percentage: null,
      },
      id: 'Tea',
    },
    {
      description: {
        translations: {
          en_us: 'Whole grain bread, grilled chicken and salad',
        },
      },
      title: {
        translations: {
          en_us: 'Chicken sandwich',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {},
      external_data: 'External data for chicken sandwich',
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 700,
        overrides: [],
      },
      tax_info: {
        tax_rate: 8,
        vat_rate_percentage: null,
      },
      id: 'Chicken-sandwich',
    },
  ],
  display_options: {
    disable_item_instructions: true,
  },
  menus: [
    {
      service_availability: [
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'monday',
        },
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'tuesday',
        },
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'wednesday',
        },
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'thursday',
        },
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'friday',
        },
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'saturday',
        },
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'sunday',
        },
      ],
      category_ids: ['Sandwiches', 'Snacks', 'Drinks'],
      id: 'All-day',
      title: {
        translations: {
          en_us: 'All day',
        },
      },
    },
  ],
  categories: [
    {
      entities: [
        {
          type: 'ITEM',
          id: 'Muffin',
        },
      ],
      id: 'Snacks',
      title: {
        translations: {
          en_us: 'Snacks',
        },
      },
    },
    {
      entities: [
        {
          type: 'ITEM',
          id: 'Chicken-sandwich',
        },
      ],
      id: 'Sandwiches',
      title: {
        translations: {
          en_us: 'Sandwiches',
        },
      },
    },
    {
      entities: [
        {
          type: 'ITEM',
          id: 'Coffee',
        },
        {
          type: 'ITEM',
          id: 'Tea',
        },
      ],
      id: 'Drinks',
      title: {
        translations: {
          en_us: 'Drinks',
        },
      },
    },
  ],
  modifier_groups: [
    {
      quantity_info: {
        overrides: [],
        quantity: {
          max_permitted: 2,
          min_permitted: null,
          default_quantity: null,
          charge_above: null,
          refund_under: null,
        },
      },
      title: {
        translations: {
          en_us: 'Add sugar',
        },
      },
      external_data: 'External data for sugar choice',
      modifier_options: [
        {
          type: 'ITEM',
          id: 'Sugar',
        },
      ],
      display_type: null,
      id: 'Add-sugar',
    },
    {
      quantity_info: {
        overrides: [],
        quantity: {
          max_permitted: 1,
          min_permitted: 1,
          default_quantity: null,
          charge_above: null,
          refund_under: null,
        },
      },
      title: {
        translations: {
          en_us: 'Choose flavor',
        },
      },
      external_data: 'External data for muffin flavor choice',
      modifier_options: [
        {
          type: 'ITEM',
          id: 'Blueberry',
        },
        {
          type: 'ITEM',
          id: 'Chocolate-deluxe',
        },
      ],
      display_type: null,
      id: 'Choose-flavor',
    },
    {
      quantity_info: {
        overrides: [],
        quantity: {
          max_permitted: 1,
          min_permitted: null,
          default_quantity: null,
          charge_above: null,
          refund_under: null,
        },
      },
      title: {
        translations: {
          en_us: 'Add milk',
        },
      },
      external_data: 'External data for milk choice',
      modifier_options: [
        {
          type: 'ITEM',
          id: 'Milk',
        },
      ],
      display_type: null,
      id: 'Add-milk',
    },
  ],
};

const D: EntireMenu = {
  items: [
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Soda',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-drink',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-drink',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Soda',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Medium rare',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-cooking-time',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: ['Choose-cooking-metho'],
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-cooking-time',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Medium-rare',
    },
    {
      description: {
        translations: {
          en_us: 'Burger and a drink!',
        },
      },
      title: {
        translations: {
          en_us: 'Burger combo',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: ['Choose-a-burger', 'Choose-drink'],
      },
      image_url: null,
      price_info: {
        price: 1000,
        overrides: [],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Burger-combo',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Cheeseburger',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-a-burger',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: ['Choose-patty'],
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-a-burger',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Cheeseburger',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Sear for 10 seconds',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Additional-pan-sear',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Additional-pan-sear',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Sear-for-10-seconds',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Sous vide',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-cooking-metho',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: ['Additional-pan-sear'],
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-cooking-metho',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Sous-vide',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Chicken burger',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-a-burger',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 200,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-a-burger',
            price: 200,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Chicken-burger',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Veggie',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-patty',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-patty',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Veggie',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Water',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-drink',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-drink',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Water',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Ground',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-type-of-beef',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-type-of-beef',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Ground',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Wagyu',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-type-of-beef',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: ['Choose-cooking-time'],
      },
      image_url: null,
      price_info: {
        price: 300,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-type-of-beef',
            price: 300,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Wagyu',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Well done',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-cooking-time',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-cooking-time',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Well-done',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Grill',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-cooking-metho',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-cooking-metho',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Grill',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'Beef',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-patty',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: ['Choose-type-of-beef'],
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Choose-patty',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'Beef',
    },
    {
      description: {
        translations: {
          en_us: '',
        },
      },
      title: {
        translations: {
          en_us: 'No sear',
        },
      },
      nutritional_info: {
        allergens: null,
        kilojoules: null,
        calories: null,
      },
      quantity_info: {
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Additional-pan-sear',
            quantity: {
              max_permitted: 1,
              min_permitted: null,
              default_quantity: null,
              charge_above: null,
              refund_under: null,
            },
          },
        ],
        quantity: {},
      },
      external_data: null,
      suspension_info: null,
      modifier_group_ids: {
        overrides: [],
        ids: null,
      },
      image_url: null,
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 'MODIFIER_GROUP',
            context_value: 'Additional-pan-sear',
            price: 0,
          },
        ],
      },
      tax_info: {
        tax_rate: null,
        vat_rate_percentage: null,
      },
      id: 'No-sear',
    },
  ],
  display_options: {
    disable_item_instructions: true,
  },
  menus: [
    {
      service_availability: [
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'monday',
        },
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'tuesday',
        },
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'wednesday',
        },
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'thursday',
        },
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'friday',
        },
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'saturday',
        },
        {
          time_periods: [
            {
              start_time: '00:00',
              end_time: '23:59',
            },
          ],
          day_of_week: 'sunday',
        },
      ],
      category_ids: ['Combo-meals'],
      id: 'All-day',
      title: {
        translations: {
          en_us: 'All day',
        },
      },
    },
  ],
  categories: [
    {
      entities: [
        {
          type: 'ITEM',
          id: 'Burger-combo',
        },
      ],
      id: 'Combo-meals',
      title: {
        translations: {
          en_us: 'Combo meals',
        },
      },
    },
  ],
  modifier_groups: [
    {
      quantity_info: {
        overrides: [],
        quantity: {
          max_permitted: 1,
          min_permitted: 1,
          default_quantity: null,
          charge_above: null,
          refund_under: null,
        },
      },
      title: {
        translations: {
          en_us: 'Choose patty',
        },
      },
      external_data: '',
      modifier_options: [
        {
          type: 'ITEM',
          id: 'Beef',
        },
        {
          type: 'ITEM',
          id: 'Veggie',
        },
      ],
      display_type: null,
      id: 'Choose-patty',
    },
    {
      quantity_info: {
        overrides: [],
        quantity: {
          max_permitted: 1,
          min_permitted: 1,
          default_quantity: null,
          charge_above: null,
          refund_under: null,
        },
      },
      title: {
        translations: {
          en_us: 'Additional pan sear',
        },
      },
      external_data: '',
      modifier_options: [
        {
          type: 'ITEM',
          id: 'No-sear',
        },
        {
          type: 'ITEM',
          id: 'Sear-for-10-seconds',
        },
      ],
      display_type: null,
      id: 'Additional-pan-sear',
    },
    {
      quantity_info: {
        overrides: [],
        quantity: {
          max_permitted: 1,
          min_permitted: 1,
          default_quantity: null,
          charge_above: null,
          refund_under: null,
        },
      },
      title: {
        translations: {
          en_us: 'Choose cooking method',
        },
      },
      external_data: '',
      modifier_options: [
        {
          type: 'ITEM',
          id: 'Sous-vide',
        },
        {
          type: 'ITEM',
          id: 'Grill',
        },
      ],
      display_type: null,
      id: 'Choose-cooking-metho',
    },
    {
      quantity_info: {
        overrides: [],
        quantity: {
          max_permitted: 1,
          min_permitted: 1,
          default_quantity: null,
          charge_above: null,
          refund_under: null,
        },
      },
      title: {
        translations: {
          en_us: 'Choose a burger',
        },
      },
      external_data: '',
      modifier_options: [
        {
          type: 'ITEM',
          id: 'Cheeseburger',
        },
        {
          type: 'ITEM',
          id: 'Chicken-burger',
        },
      ],
      display_type: null,
      id: 'Choose-a-burger',
    },
    {
      quantity_info: {
        overrides: [],
        quantity: {
          max_permitted: 1,
          min_permitted: 1,
          default_quantity: null,
          charge_above: null,
          refund_under: null,
        },
      },
      title: {
        translations: {
          en_us: 'Choose type of beef',
        },
      },
      external_data: '',
      modifier_options: [
        {
          type: 'ITEM',
          id: 'Wagyu',
        },
        {
          type: 'ITEM',
          id: 'Ground',
        },
      ],
      display_type: null,
      id: 'Choose-type-of-beef',
    },
    {
      quantity_info: {
        overrides: [],
        quantity: {
          max_permitted: 1,
          min_permitted: 1,
          default_quantity: null,
          charge_above: null,
          refund_under: null,
        },
      },
      title: {
        translations: {
          en_us: 'Choose cooking time',
        },
      },
      external_data: '',
      modifier_options: [
        {
          type: 'ITEM',
          id: 'Medium-rare',
        },
        {
          type: 'ITEM',
          id: 'Well-done',
        },
      ],
      display_type: null,
      id: 'Choose-cooking-time',
    },
    {
      quantity_info: {
        overrides: [],
        quantity: {
          max_permitted: 1,
          min_permitted: 1,
          default_quantity: null,
          charge_above: null,
          refund_under: null,
        },
      },
      title: {
        translations: {
          en_us: 'Choose drink',
        },
      },
      external_data: '',
      modifier_options: [
        {
          type: 'ITEM',
          id: 'Soda',
        },
        {
          type: 'ITEM',
          id: 'Water',
        },
      ],
      display_type: null,
      id: 'Choose-drink',
    },
  ],
};
