import { EntireMenu } from '../index';

const TMS_MENU: EntireMenu = {
  menus: [
    {
      id: 'Menu',
      title: {
        translations: {
          en: 'Menu',
        },
      },
      service_availability: [
        {
          day_of_week: 'monday',
          time_periods: [
            {
              start_time: '11:00',
              end_time: '21:00',
            },
          ],
        },
        {
          day_of_week: 'tuesday',
          time_periods: [
            {
              start_time: '11:00',
              end_time: '21:00',
            },
          ],
        },
        {
          day_of_week: 'wednesday',
          time_periods: [
            {
              start_time: '11:00',
              end_time: '21:00',
            },
          ],
        },
        {
          day_of_week: 'thursday',
          time_periods: [
            {
              start_time: '11:00',
              end_time: '21:00',
            },
          ],
        },
        {
          day_of_week: 'friday',
          time_periods: [
            {
              start_time: '11:00',
              end_time: '21:00',
            },
          ],
        },
        {
          day_of_week: 'saturday',
          time_periods: [
            {
              start_time: '11:00',
              end_time: '21:00',
            },
          ],
        },
      ],
      category_ids: ['Mains', 'Sandwiches', 'Fresh_Crisp_Salads', 'Famiglia_Favorites', 'Al-A-Carte_Sides', 'Starters'],
    },
    {
      id: 'Vegan_Menu',
      title: {
        translations: {
          en: 'Vegan Menu',
        },
      },
      service_availability: [
        {
          day_of_week: 'monday',
          time_periods: [
            {
              start_time: '16:00',
              end_time: '21:00',
            },
          ],
        },
        {
          day_of_week: 'tuesday',
          time_periods: [
            {
              start_time: '16:00',
              end_time: '21:00',
            },
          ],
        },
        {
          day_of_week: 'wednesday',
          time_periods: [
            {
              start_time: '16:00',
              end_time: '21:00',
            },
          ],
        },
        {
          day_of_week: 'thursday',
          time_periods: [
            {
              start_time: '16:00',
              end_time: '21:00',
            },
          ],
        },
        {
          day_of_week: 'friday',
          time_periods: [
            {
              start_time: '16:00',
              end_time: '21:00',
            },
          ],
        },
        {
          day_of_week: 'saturday',
          time_periods: [
            {
              start_time: '12:00',
              end_time: '21:00',
            },
          ],
        },
      ],
      category_ids: ['Appetizers_48960', 'Entree', 'Sides', 'Salads', 'Sandwiches', 'Famiglia_Favorites'],
    },
  ],
  categories: [
    {
      id: 'Entree',
      title: {
        translations: {
          en: 'Entree',
        },
      },
      entities: [
        {
          id: 'Stoppe_Trio',
          type: 'ITEM',
        },
        {
          id: 'Eggplant_Smash',
          type: 'ITEM',
        },
        {
          id: 'Bucket_of_Balls_(13_',
          type: 'ITEM',
        },
        {
          id: 'Meatball_Flight_04870',
          type: 'ITEM',
        },
        {
          id: 'Pasta_Fagioli',
          type: 'ITEM',
        },
        {
          id: 'Pasta_Aglia_e_Olio',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Sides',
      title: {
        translations: {
          en: 'Sides',
        },
      },
      entities: [
        {
          id: 'White_Bean_Ragu_96445',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Fresh_Crisp_Salads',
      title: {
        translations: {
          en: 'Salads',
        },
      },
      entities: [
        {
          id: 'Stoppe_Salad',
          type: 'ITEM',
        },
        {
          id: 'Caprese_Salad',
          type: 'ITEM',
        },
        {
          id: 'Farro-Salad',
          type: 'ITEM',
        },
        {
          id: 'Roasted_Vegetable_Sa',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Sandwiches',
      title: {
        translations: {
          en: 'Sandwiches',
        },
      },
      entities: [
        {
          id: 'Meatball_Smash_22425',
          type: 'ITEM',
        },
        {
          id: "Guy-Fieri's-DDD-Smas",
          type: 'ITEM',
        },
        {
          id: 'Grande-Smash',
          type: 'ITEM',
        },
        {
          id: 'Eggplant_Panino',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Appetizers_48960',
      title: {
        translations: {
          en: 'Appetizers',
        },
      },
      entities: [
        {
          id: '5_Balls',
          type: 'ITEM',
        },
        {
          id: 'Garlic_Focaccia_Bite',
          type: 'ITEM',
        },
        {
          id: 'Baked_Mozzarella',
          type: 'ITEM',
        },
        {
          id: 'Fried_Calamari',
          type: 'ITEM',
        },
        {
          id: 'Focaccia_Pizza_56866',
          type: 'ITEM',
        },
        {
          id: 'Meatball_Lettuce_Wra',
          type: 'ITEM',
        },
        {
          id: '3_Meatball_Sliders',
          type: 'ITEM',
        },
        {
          id: 'Spicy-fried-shrimp',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Famiglia_Favorites',
      title: {
        translations: {
          en: 'Famiglia Favorites',
        },
      },
      entities: [
        {
          id: 'Eggplant_Stack',
          type: 'ITEM',
        },
        {
          id: 'Spicy-Shrimp-on-Pole',
          type: 'ITEM',
        },
        {
          id: 'Shrimp-Scampi',
          type: 'ITEM',
        },
        {
          id: 'Lasagna_Bolognese',
          type: 'ITEM',
        },
        {
          id: 'Vegetarian_Lasagna',
          type: 'ITEM',
        },
        {
          id: 'Pasta_Primavera_Vega',
          type: 'ITEM',
        },
        {
          id: 'Baked_Ziti',
          type: 'ITEM',
        },
        {
          id: 'Tortellini_in_Pink_S',
          type: 'ITEM',
        },
        {
          id: 'Cheese-Tortellini-wi',
          type: 'ITEM',
        },
        {
          id: 'Pasta_Aglia_E_Olio',
          type: 'ITEM',
        },
        {
          id: 'Pasta_Fagioli',
          type: 'ITEM',
        },
        {
          id: 'Classic-Pasta',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Salads',
      title: {
        translations: {
          en: 'Salads',
        },
      },
      entities: [
        {
          id: 'Stoppe_Salad',
          type: 'ITEM',
        },
        {
          id: 'Roasted_Vegetable_Sa',
          type: 'ITEM',
        },
        {
          id: 'Caprese_Salad',
          type: 'ITEM',
        },
        {
          id: 'Fried-or-sauteed-shr',
          type: 'ITEM',
        },
        {
          id: 'Farro-Salad',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Al-A-Carte_Sides',
      title: {
        translations: {
          en: 'Sides',
        },
      },
      entities: [
        {
          id: 'Creamy_Polenta_60235',
          type: 'ITEM',
        },
        {
          id: 'White_Bean_Ragu_90503',
          type: 'ITEM',
        },
        {
          id: 'Penne_Pasta_34189',
          type: 'ITEM',
        },
        {
          id: 'Linguine_82207',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Starters',
      title: {
        translations: {
          en: 'Starters',
        },
      },
      entities: [
        {
          id: 'Garlic-Focaccia-Bite',
          type: 'ITEM',
        },
        {
          id: 'Meatball-Sliders',
          type: 'ITEM',
        },
        {
          id: 'Focaccia-Pizza',
          type: 'ITEM',
        },
        {
          id: 'Create-your-Own-Past',
          type: 'ITEM',
        },
        {
          id: 'Meatball-Lettuce-Wra',
          type: 'ITEM',
        },
        {
          id: 'Meatball-Flight',
          type: 'ITEM',
        },
        {
          id: 'Stoppe-Trio',
          type: 'ITEM',
        },
        {
          id: 'Five-Ball-Sampler',
        },
      ],
    },
    {
      id: 'Mains',
      title: {
        translations: {
          en: 'Mains',
        },
      },
      entities: [
        {
          id: 'Meatball_Flight',
          type: 'ITEM',
        },
        {
          id: 'Stoppe_Trio_10012',
          type: 'ITEM',
        },
        {
          id: 'Focaccia-Cacio-e-Pep',
          type: 'ITEM',
        },
        {
          id: 'Cheese_Focaccia_Pizz',
          type: 'ITEM',
        },
        {
          id: 'Polenta-Bowl-82189',
          type: 'ITEM',
        },
        {
          id: 'Pasta-Bowl',
          type: 'ITEM',
        },
      ],
    },
  ],
  items: [
    {
      id: 'Spicy_Pork',
      external_data: '',
      title: {
        translations: {
          en: 'Spicy Pork',
        },
      },
      price_info: {
        price: 200,
        overrides: [],
      },
      quantity_info: {
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
    {
      id: 'Diet_Coke_45631',
      external_data: '',
      title: {
        translations: {
          en: 'Diet Coke',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['CAT_PREPARED_DRINK', 'TEMP_COLD'],
          source: 3,
        },
      },
    },
    {
      id: 'Salami_98516',
      external_data: '',
      title: {
        translations: {
          en: 'Salami',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            quantity: {
              max_permitted: 2,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Sauteed-Shrimp',
      title: {
        translations: {
          en: 'Sauteed Shrimp',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Add-Ons',
            price: 500,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Add-ons',
            price: 500,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Add-Ons',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Add-ons',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1586663999,
        },
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Small',
      title: {
        translations: {
          en: 'Small',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Size',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Size',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Chicken_Marsala_(Glu_70606',
      external_data: '',
      title: {
        translations: {
          en: 'Chicken Marsala (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1586663999,
        },
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
    {
      id: 'Anchovies',
      external_data: '',
      title: {
        translations: {
          en: 'Anchovies',
        },
      },
      price_info: {
        price: 150,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Chicken_Parmigiana_(_82533',
      external_data: '',
      title: {
        translations: {
          en: 'Chicken Parmigiana (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
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
    {
      id: '3_Meatball_Slider',
      title: {
        translations: {
          en: '3 Meatball Slider',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 695,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Maccaroni_and_Cheese',
      external_data: '',
      title: {
        translations: {
          en: 'Maccaroni and Cheese Meatball',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Vegetarian_(Gluten_F_13863',
      external_data: '',
      title: {
        translations: {
          en: 'Vegetarian (Gluten Free)',
        },
      },
      price_info: {
        price: 600,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            price: 600,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatballs-50247',
            price: 600,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatballs-50247',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: "Iana's_Gem",
      external_data: '',
      title: {
        translations: {
          en: "Iana's Gem",
        },
      },
      price_info: {
        price: 150,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 150,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Roasted-Tomato-Sauce',
      external_data: '',
      title: {
        translations: {
          en: 'Roasted Tomato Sauce',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauce',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauce',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Red_Peppers_55518',
      external_data: '',
      title: {
        translations: {
          en: 'Red Peppers',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            quantity: {
              max_permitted: 2,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Jeffy’s_Crab_Ball',
      external_data: '',
      title: {
        translations: {
          en: 'Jeffy’s Crab Ball',
        },
      },
      price_info: {
        price: 300,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Roasted-Tomato-27558',
      external_data: '',
      title: {
        translations: {
          en: 'Roasted Tomato',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauces-07213',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauces-07213',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Salami',
      external_data: '',
      title: {
        translations: {
          en: 'Salami',
        },
      },
      price_info: {
        price: 150,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Spicy-Shrimp-on-Pole',
      title: {
        translations: {
          en: 'Spicy Shrimp on Polenta',
        },
      },
      description: {
        translations: {
          en: 'Sauteed with garlic on top of creamy polenta. Served with Stoppe Salad and Focaccia.',
        },
      },
      price_info: {
        price: 1500,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1584849599,
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Stoppe_Trio',
      title: {
        translations: {
          en: 'Stoppe Trio',
        },
      },
      description: {
        translations: {
          en: 'Served with Stoppe Salad, Side and Focaccia Bread.',
        },
      },
      price_info: {
        price: 1095,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Vegan-Pesto-92011',
      external_data: '',
      title: {
        translations: {
          en: 'Vegan Pesto',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauce-54863',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauce-54863',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Peppers-and-Onions-i',
      title: {
        translations: {
          en: 'Peppers and Onions in White Wine Sauce',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauces',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauces',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Crab_Balls',
      title: {
        translations: {
          en: 'Crab Balls',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 1095,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Unsweet_Tea',
      external_data: '',
      title: {
        translations: {
          en: 'Unsweet Tea',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Isabella’s_Pesto_37713',
      external_data: '',
      title: {
        translations: {
          en: 'Isabella’s Pesto',
        },
      },
      price_info: {
        price: 150,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Lasagna_Bolognese',
      title: {
        translations: {
          en: 'Lasagna Bolognese',
        },
      },
      description: {
        translations: {
          en: 'Served with stoppe salad and focaccia.',
        },
      },
      price_info: {
        price: 1400,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Peppers_and_Onions_(',
      external_data: '',
      title: {
        translations: {
          en: 'Peppers and Onions (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Onions_66952',
      external_data: '',
      title: {
        translations: {
          en: 'Onions',
        },
      },
      price_info: {
        price: 150,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Chicken_Buffalo_Bleu',
      external_data: '',
      title: {
        translations: {
          en: 'Chicken Buffalo Bleu',
        },
      },
      price_info: {
        price: 200,
        overrides: [],
      },
      quantity_info: {
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
    {
      id: 'Penne',
      external_data: '',
      title: {
        translations: {
          en: 'Penne',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Preparatio',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Preparatio',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Diet_Coke',
      title: {
        translations: {
          en: 'Diet Coke',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 295,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['CAT_PREPARED_DRINK', 'TEMP_COLD'],
          source: 3,
        },
      },
    },
    {
      id: 'Banana_Peppers',
      external_data: '',
      title: {
        translations: {
          en: 'Banana Peppers',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            quantity: {
              max_permitted: 2,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: "Jeffy's_Crab_Ball_68449",
      external_data: '',
      title: {
        translations: {
          en: "Jeffy's Crab Ball",
        },
      },
      price_info: {
        price: 300,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 400,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 400,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Linguine_82207',
      title: {
        translations: {
          en: 'Linguine',
        },
      },
      description: {
        translations: {
          en: 'With choice of sauce.',
        },
      },
      price_info: {
        price: 400,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Size', 'Choice_of_Sauce_67596'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Vegan_Meatball',
      external_data: '',
      title: {
        translations: {
          en: 'Vegan Meatball',
        },
      },
      price_info: {
        price: 150,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Arugula',
      external_data: '',
      title: {
        translations: {
          en: 'Arugula',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            quantity: {
              max_permitted: 2,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Olives',
      external_data: '',
      title: {
        translations: {
          en: 'Olives',
        },
      },
      price_info: {
        price: 150,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Polenta-Bowl-82189',
      title: {
        translations: {
          en: 'Polenta Bowl',
        },
      },
      description: {
        translations: {
          en: 'Creamy polenta with Mushrooms, Zucchini, Peppers, and Onions.',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/d7f983f0-6239-411a-af91-750d879e40d7.jpeg',
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Add-Ons'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['CAT_PREPARED_FOOD', 'TEMP_HEATED'],
          source: 2,
        },
      },
    },
    {
      id: 'Cheese_Ravioli_and_M',
      title: {
        translations: {
          en: 'Cheese Ravioli and Meatball',
        },
      },
      description: {
        translations: {
          en: 'Served with stoppe salad and focaccia.',
        },
      },
      price_info: {
        price: 1095,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 8640000000,
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'White_Bean_Ragu',
      external_data: '',
      title: {
        translations: {
          en: 'White Bean Ragu',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
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
    {
      id: 'Cheese-Tortellini-wi',
      title: {
        translations: {
          en: 'Cheese Tortellini with Sausage',
        },
      },
      description: {
        translations: {
          en: 'Tortellini tossed in our pink sauce. Served with Stoppe Salad and Focaccia.',
        },
      },
      price_info: {
        price: 1500,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1586663999,
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Meatballs_on_a_Stick',
      title: {
        translations: {
          en: 'Meatballs on a Stick',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 695,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 8640000000,
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Focaccia-Pizza',
      title: {
        translations: {
          en: 'Focaccia Pizza ',
        },
      },
      description: {
        translations: {
          en: 'Freshly baked focaccia topped with RT or vegan pesto.',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/c39144dd-e8da-4ba2-9360-d025f0701233.jpeg',
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Meatballs-76370', 'Choice-of-Toppings'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Bucket_of_13_Meatbal',
      title: {
        translations: {
          en: 'Bucket of 13 Meatballs',
        },
      },
      description: {
        translations: {
          en: 'One Style, with Choice of Sauce and Focaccia.',
        },
      },
      price_info: {
        price: 2395,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice_of_Meatball_31631', 'Choice_of_Sauce'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Fried-Shrimp',
      title: {
        translations: {
          en: 'Fried Shrimp',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Add-Ons',
            price: 500,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Add-ons',
            price: 500,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Add-Ons',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Add-ons',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1586663999,
        },
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Garlic-Focaccia-Bite',
      title: {
        translations: {
          en: 'Garlic Focaccia Bites',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 700,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Sauce-54863'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Arugula_02698',
      external_data: '',
      title: {
        translations: {
          en: 'Arugula',
        },
      },
      price_info: {
        price: 150,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Vegan-Pesto-04016',
      external_data: '',
      title: {
        translations: {
          en: 'Vegan Pesto',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauces-07213',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauces-07213',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Gator',
      title: {
        translations: {
          en: 'Gator',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 1095,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Meatball_Flight_04870',
      title: {
        translations: {
          en: 'Meatball Flight',
        },
      },
      description: {
        translations: {
          en: '5 Meatballs, 1 side, beverage and dessert.',
        },
      },
      price_info: {
        price: 1995,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Pink-lemonade',
      title: {
        translations: {
          en: 'Pink lemonade',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 395,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'White-Bean-Ragu',
      title: {
        translations: {
          en: 'White Bean Ragu',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 600,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sides',
            price: 600,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sides',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'White_Bean_Ragu_90503',
      title: {
        translations: {
          en: 'White Bean Ragu',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 400,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Size'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Spicy_Pork_(Gluten_F',
      external_data: '',
      title: {
        translations: {
          en: 'Spicy Pork (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Baked_Ziti',
      title: {
        translations: {
          en: 'Baked Ziti',
        },
      },
      description: {
        translations: {
          en: 'Pasta tossed with our housemade 3 cheese mix, roasted tomato sauce topped with mozzarella. Served with Stoppe salad and focaccia.',
        },
      },
      price_info: {
        price: 1300,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Eggplant-Quinoa-01111',
      title: {
        translations: {
          en: 'Eggplant Quinoa',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 200,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Sparkling-blood-oran',
      title: {
        translations: {
          en: 'Sparkling blood orange beverage',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 395,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Sparkling-lemonade',
      title: {
        translations: {
          en: 'Sparkling lemonade',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 395,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_COLD', 'CAT_PREPARED_DRINK'],
          source: 2,
        },
      },
    },
    {
      id: "Nonna's_Traditional_",
      external_data: '',
      title: {
        translations: {
          en: "Nonna's Traditional Italian",
        },
      },
      price_info: {
        price: 200,
        overrides: [],
      },
      quantity_info: {
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
    {
      id: 'Creamy_Polenta',
      external_data: '',
      title: {
        translations: {
          en: 'Creamy Polenta',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
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
    {
      id: 'Sausage_Pepper_and_O',
      external_data: '',
      title: {
        translations: {
          en: 'Sausage Pepper and Onions (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
      },
      suspension_info: {
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
    {
      id: 'Isabella’s_Signatu',
      external_data: '',
      title: {
        translations: {
          en: 'Isabella’s Signature Pesto (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Tomatoes',
      external_data: '',
      title: {
        translations: {
          en: 'Tomatoes',
        },
      },
      price_info: {
        price: 150,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Vegetarian-ball-26049',
      title: {
        translations: {
          en: 'Vegetarian ball',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Meatballs-50247',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Meatballs-50247',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED'],
          source: 'MANUAL',
        },
      },
    },
    {
      id: 'Eggplant_Panino',
      title: {
        translations: {
          en: 'Eggplant Panino',
        },
      },
      description: {
        translations: {
          en: 'Breaded eggplant, mozzarella, peppers, onions, arugula, and pesto mayo on a ciabatta roll. Served with Stoppe salad.',
        },
      },
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1586663999,
        },
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Add-On'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Pellegrino',
      title: {
        translations: {
          en: 'Pellegrino',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 300,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_COLD', 'CAT_WATER', 'TRAIT_CARB', 'TRAIT_FLV_SWT', 'CONTAINER_BOTTLED'],
          source: 2,
        },
      },
    },
    {
      id: 'Red_Peppers',
      external_data: '',
      title: {
        translations: {
          en: 'Red Peppers',
        },
      },
      price_info: {
        price: 150,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: "Jeffy's_Sausage_(Glu",
      external_data: '',
      title: {
        translations: {
          en: "Jeffy's Sausage (Gluten free)",
        },
      },
      price_info: {
        price: 200,
        overrides: [],
      },
      quantity_info: {
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
    {
      id: 'Chicken_Marsala_(Glu_51979',
      external_data: '',
      title: {
        translations: {
          en: 'Chicken Marsala (Gluten free)',
        },
      },
      price_info: {
        price: 200,
        overrides: [],
      },
      quantity_info: {
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
    {
      id: 'Capuccino',
      title: {
        translations: {
          en: 'Capuccino',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 350,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Meatball_Flight',
      title: {
        translations: {
          en: 'Meatball Flight',
        },
      },
      description: {
        translations: {
          en: 'Includes five meatballs, polenta or white bean ragu, focaccia, and beverage.',
        },
      },
      price_info: {
        price: 2000,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice_of_Meat_Ball', 'Choice_of_Sauce_67596', 'Choice_of_Side', 'Choice_of_Beverage'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Pesto',
      external_data: '',
      title: {
        translations: {
          en: 'Pesto',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Roasted_Vegetable_Sa',
      title: {
        translations: {
          en: 'Roasted Vegetable Salad',
        },
      },
      description: {
        translations: {
          en: 'Seasonal fresh vegetables, garlic, and herbs over a bed of greens. Served with Focaccia Bread.',
        },
      },
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Add-ons'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Olives_63729',
      external_data: '',
      title: {
        translations: {
          en: 'Olives',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            quantity: {
              max_permitted: 2,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Classic-Pasta',
      title: {
        translations: {
          en: 'Classic Pasta',
        },
      },
      description: {
        translations: {
          en: 'Penne or linguine with your choice of sauce. Served with Stoppe Salad and Focaccia.',
        },
      },
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Preparatio', 'Choice_of_Sauce'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Gator_Meatball_90897',
      external_data: '',
      title: {
        translations: {
          en: 'Gator Meatball',
        },
      },
      price_info: {
        price: 300,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 400,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 400,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 300,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
      },
      suspension_info: {
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
    {
      id: 'Penne-30612',
      title: {
        translations: {
          en: 'Penne',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 600,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sides',
            price: 600,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sides',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Mac_and_Cheese_Meatb',
      external_data: '',
      title: {
        translations: {
          en: 'Mac and Cheese Meatball',
        },
      },
      price_info: {
        price: 200,
        overrides: [],
      },
      quantity_info: {
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
    {
      id: 'Five-Ball-Sampler',
      title: {
        translations: {
          en: 'Five Ball Sampler',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 900,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Meatball-('],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Fried_Calamari',
      title: {
        translations: {
          en: 'Fried Calamari',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/8d8fa427-2a82-469b-9d53-093c98f4cedb.jpeg',
      price_info: {
        price: 995,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['CAT_PREPARED_FOOD', 'TEMP_HEATED'],
          source: 2,
        },
      },
    },
    {
      id: 'Onions-88527',
      external_data: '',
      title: {
        translations: {
          en: 'Onions',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 100,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Spicy-fried-shrimp',
      title: {
        translations: {
          en: 'Spicy fried shrimp',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 1295,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Macaroni_and_Cheese_',
      external_data: '',
      title: {
        translations: {
          en: 'Macaroni and Cheese Meatball (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Shrimp-Scampi',
      title: {
        translations: {
          en: 'Shrimp Scampi',
        },
      },
      description: {
        translations: {
          en: 'Sauteed with garlic, fresh herbs tossed with linguine. Served with Stoppe and Foccacia.',
        },
      },
      price_info: {
        price: 1600,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1586577599,
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Eggplant-Quinoa-30138',
      title: {
        translations: {
          en: 'Eggplant Quinoa',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 200,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Meatballs-76370',
            price: 200,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Meatballs-76370',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Jeffy’s_Sausage_(G',
      external_data: '',
      title: {
        translations: {
          en: 'Jeffy’s Sausage  (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1582865999,
        },
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Espresso',
      title: {
        translations: {
          en: 'Espresso',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 350,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_DRINK'],
          source: 2,
        },
      },
    },
    {
      id: 'Pasta_Aglia_e_Olio',
      title: {
        translations: {
          en: 'Pasta Aglia e Olio',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 1095,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Isabella’s_Pesto',
      external_data: '',
      title: {
        translations: {
          en: 'Isabella’s Pesto',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            quantity: {
              max_permitted: 2,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Fried-or-sauteed-shr',
      title: {
        translations: {
          en: 'Fried or sauteed shrimp salad',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 1295,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_UNHEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Focaccia-Cacio-e-Pep',
      title: {
        translations: {
          en: 'Focaccia Cacio e Pepe',
        },
      },
      description: {
        translations: {
          en: 'Freshly baked focaccia topped with 3 cheeses, garlic, and tri-color peppercorn blend.',
        },
      },
      price_info: {
        price: 1200,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Chicken_Marsala_(Glu',
      external_data: '',
      title: {
        translations: {
          en: 'Chicken Marsala  (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1586663999,
        },
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Peppers',
      external_data: '',
      title: {
        translations: {
          en: 'Peppers',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 100,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Bucket_of_Balls_(13_',
      title: {
        translations: {
          en: 'Bucket of Balls (13 Balls)',
        },
      },
      description: {
        translations: {
          en: 'Served with 2 slices of Eggplant and Vegan ball topped with Pesto Sauce on Focaccia Bread.',
        },
      },
      price_info: {
        price: 2395,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Roasted-Tomato',
      title: {
        translations: {
          en: 'Roasted Tomato',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauces',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauces',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Lamb_(Gluten_Free)',
      external_data: '',
      title: {
        translations: {
          en: 'Lamb (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 8640000000,
        },
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Stoppe_Trio_41428',
      title: {
        translations: {
          en: 'Stoppe Trio',
        },
      },
      description: {
        translations: {
          en: 'Served with side, Stoppe Salad, and any Style Meatballs',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/5174cfb5-9bee-4fad-a7fd-bb76301a6894',
      price_info: {
        price: 1295,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice_of_Meatball_08710', 'Choice_of_Side_70640', 'Choice_of_Sauce_-_fo'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Vegetarian_Lasagna',
      title: {
        translations: {
          en: 'Vegetarian Lasagna',
        },
      },
      description: {
        translations: {
          en: 'Served with Stoppe Salad and Focaccia.',
        },
      },
      price_info: {
        price: 1200,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Macaroni_and_Cheese__74559',
      external_data: '',
      title: {
        translations: {
          en: 'Macaroni and Cheese Meatball',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1586663999,
        },
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
    {
      id: 'Roasted-Tomato-Sauce-25702',
      external_data: '',
      title: {
        translations: {
          en: 'Roasted Tomato Sauce',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauce-54863',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauce-54863',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Lemonade',
      external_data: '',
      title: {
        translations: {
          en: 'Lemonade',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Eggplant_Smash',
      title: {
        translations: {
          en: 'Eggplant Smash',
        },
      },
      description: {
        translations: {
          en: 'Served with Stoppe Salad, Side and Focaccia Bread.',
        },
      },
      price_info: {
        price: 1095,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Crab_Ball',
      external_data: '',
      title: {
        translations: {
          en: 'Crab Ball',
        },
      },
      price_info: {
        price: 400,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 400,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 300,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: "Jeffy's_Crab_Ball",
      external_data: '',
      title: {
        translations: {
          en: "Jeffy's Crab Ball",
        },
      },
      price_info: {
        price: 400,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Chicken_Buffalo_Bleu_13381',
      external_data: '',
      title: {
        translations: {
          en: 'Chicken Buffalo Bleu (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
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
    {
      id: 'Gluten_Free',
      external_data: '',
      title: {
        translations: {
          en: 'Gluten Free',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Focaccia_Pizza_56866',
      title: {
        translations: {
          en: 'Focaccia Pizza',
        },
      },
      description: {
        translations: {
          en: 'Roasted Tomato and Pesto Sauce with your choice of Toppings.',
        },
      },
      price_info: {
        price: 1095,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Toppings'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Large',
      title: {
        translations: {
          en: 'Large',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Size',
            price: 200,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Size',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Focaccia_Grande_Pizz',
      title: {
        translations: {
          en: 'Focaccia Grande Pizza',
        },
      },
      description: {
        translations: {
          en: '14 pieces with two toppings.',
        },
      },
      price_info: {
        price: 2995,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice_of_Second_Top'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Vegetarian',
      external_data: '',
      title: {
        translations: {
          en: 'Vegetarian',
        },
      },
      price_info: {
        price: 200,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 200,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1584849599,
        },
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Double_Espresso',
      title: {
        translations: {
          en: 'Double Espresso',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 500,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_DRINK'],
          source: 2,
        },
      },
    },
    {
      id: 'Creamy_Provolone_(Gl',
      external_data: '',
      title: {
        translations: {
          en: 'Creamy Provolone (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Coke',
      external_data: '',
      title: {
        translations: {
          en: 'Coke',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['CAT_PREPARED_DRINK', 'TEMP_COLD'],
          source: 3,
        },
      },
    },
    {
      id: 'Veggie_Ball_(Gluten_',
      external_data: '',
      title: {
        translations: {
          en: 'Veggie Ball (Gluten Free/ Vegan)',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Penne-88599',
      external_data: '',
      title: {
        translations: {
          en: 'Penne',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Side',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Side',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Eggplant-Quinoa-Ball',
      external_data: '',
      title: {
        translations: {
          en: 'Eggplant Quinoa Ball',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Meatballs-50247',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Meatballs-50247',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Eggplant_Stack',
      title: {
        translations: {
          en: 'Eggplant Stack',
        },
      },
      description: {
        translations: {
          en: 'Breaded eggplant stacked with 3 chesses, baked in roasted tomato sauce, topped with mozzarella penne or linguine. Served with Stoppe Salad and Focaccia.',
        },
      },
      price_info: {
        price: 1300,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1586663999,
        },
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Preparatio'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Sprite',
      external_data: '',
      title: {
        translations: {
          en: 'Sprite',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['CAT_PREPARED_DRINK', 'TEMP_COLD'],
          source: 3,
        },
      },
    },
    {
      id: 'Marsala_Mushroom_(Gl',
      external_data: '',
      title: {
        translations: {
          en: 'Marsala Mushroom (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Penne_Pasta',
      external_data: '',
      title: {
        translations: {
          en: 'Penne Pasta',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Pasta',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Pasta',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Buffalo_Bleu_(Gluten',
      external_data: '',
      title: {
        translations: {
          en: 'Buffalo Bleu (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Olives-96586',
      external_data: '',
      title: {
        translations: {
          en: 'Olives',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 100,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Arugula-15480',
      external_data: '',
      title: {
        translations: {
          en: 'Arugula',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 100,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Chicken_Parmigiana_(',
      external_data: '',
      title: {
        translations: {
          en: 'Chicken Parmigiana (Gluten free)',
        },
      },
      price_info: {
        price: 200,
        overrides: [],
      },
      quantity_info: {
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
    {
      id: 'One_Ciabatta_Roll',
      external_data: '',
      title: {
        translations: {
          en: 'One Ciabatta Roll',
        },
      },
      price_info: {
        price: 100,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Meatball_Smash_22425',
      title: {
        translations: {
          en: 'Meatball Smash',
        },
      },
      description: {
        translations: {
          en: 'Served on a fresh Ciabatta Roll topped with mozarella and Stoppe Salad.',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/3f47ea9b-6ced-4226-9177-441a5dc848b2',
      price_info: {
        price: 1000,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice_of_Meatball', 'Choice-of-Add-On'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['CAT_PREPARED_FOOD', 'TEMP_HEATED'],
          source: 2,
        },
      },
    },
    {
      id: 'Roasted_Tomato_Sauce',
      external_data: '',
      title: {
        translations: {
          en: 'Roasted Tomato Sauce',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Pasta_Aglia_E_Olio',
      title: {
        translations: {
          en: 'Pasta Aglia E Olio',
        },
      },
      description: {
        translations: {
          en: 'Linguine tossed with garlic, olive oil, red pepper flakes, a hint of anchovy, and fresh basil. Served with Stoppe salad and focaccia.',
        },
      },
      price_info: {
        price: 1200,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Zucchini',
      external_data: '',
      title: {
        translations: {
          en: 'Zucchini',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Veggies',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Veggies',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'White_Bean_Ragu_96445',
      title: {
        translations: {
          en: 'White Bean Ragu',
        },
      },
      description: {
        translations: {
          en: 'Penne with roasted Tomato or Pesto.',
        },
      },
      price_info: {
        price: 625,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Sauces'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Unsweet_Tea_75950',
      title: {
        translations: {
          en: 'Unsweet Tea',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 295,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_COLD', 'CAT_WATER', 'TRAIT_NONCARB', 'TRAIT_FLV_SWT', 'CONTAINER_BOTTLED'],
          source: 2,
        },
      },
    },
    {
      id: 'Banana_Peppers_90928',
      external_data: '',
      title: {
        translations: {
          en: 'Banana Peppers',
        },
      },
      price_info: {
        price: 150,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Coffee_06635',
      external_data: '',
      title: {
        translations: {
          en: 'Coffee',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Gator_Meatballs',
      external_data: '',
      title: {
        translations: {
          en: 'Gator Meatballs',
        },
      },
      price_info: {
        price: 300,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 400,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Fried-Egg',
      title: {
        translations: {
          en: 'Fried Egg',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Add-On',
            price: 100,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Add-Ons',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Add-On',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Add-Ons',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Meatball-Lettuce-Wra',
      title: {
        translations: {
          en: 'Meatball Lettuce Wraps',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 700,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Banana-Peppers',
      external_data: '',
      title: {
        translations: {
          en: 'Banana Peppers',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 100,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Meatball-Sliders',
      title: {
        translations: {
          en: 'Meatball Sliders',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 700,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: "Guy-Fieri's-DDD-Smas",
      title: {
        translations: {
          en: "Guy Fieri's DDD Smash",
        },
      },
      description: {
        translations: {
          en: '2 Meatballs on ciabatta topped with a polenta ball, mozzarella, and a fried egg. Served with Stoppe Salad.',
        },
      },
      price_info: {
        price: 1300,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1584849599,
        },
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice_of_Meatball', 'Choice_of_Sauce_67596', 'Choice-of-Add-On'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Eggplant_Stack_44412',
      title: {
        translations: {
          en: 'Eggplant Stack',
        },
      },
      description: {
        translations: {
          en: 'Breaded eggplant stacked with imported cheeses and roasted tomato sauce. Served with stoppe salad and focaccia. ',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/26efbc85-460c-412b-b930-05c02aa5b7fc',
      price_info: {
        price: 1295,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Add_Protein', 'Add_Meatball'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Fanta_Orange',
      external_data: '',
      title: {
        translations: {
          en: 'Fanta Orange',
        },
      },
      price_info: {
        price: 0,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['CAT_PREPARED_DRINK', 'TEMP_COLD'],
          source: 3,
        },
      },
    },
    {
      id: 'Vegan-Ball',
      external_data: '',
      title: {
        translations: {
          en: 'Vegan Ball',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Meatballs-50247',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Meatballs-50247',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Lemonade_86054',
      title: {
        translations: {
          en: 'Lemonade',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 295,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_COLD', 'CAT_PREPARED_DRINK'],
          source: 2,
        },
      },
    },
    {
      id: 'Tortellini_in_Pink_S',
      title: {
        translations: {
          en: 'Cheese Tortellini',
        },
      },
      description: {
        translations: {
          en: 'Tortellini tossed in our pink sauce. Served with Stoppe Salad and Focaccia.',
        },
      },
      price_info: {
        price: 1300,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 1586663999,
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Meatball',
      external_data: '',
      title: {
        translations: {
          en: 'Meatball',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            quantity: {
              max_permitted: 2,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Caprese_Salad',
      title: {
        translations: {
          en: 'Caprese Salad',
        },
      },
      description: {
        translations: {
          en: 'Fresh mozzarella, cherry tomatoes tossed in our signature pesto sauce over a bed of greens. Served with Focaccia.',
        },
      },
      price_info: {
        price: 1000,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Add-ons'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_UNHEATED', 'CAT_SANDWICH'],
          source: 2,
        },
      },
    },
    {
      id: 'Linguine-36561',
      title: {
        translations: {
          en: 'Linguine',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 600,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sides',
            price: 600,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sides',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Meatball_04038',
      external_data: '',
      title: {
        translations: {
          en: 'Meatball',
        },
      },
      price_info: {
        price: 150,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            price: 200,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Grande-Smash',
      title: {
        translations: {
          en: 'Grande Smash',
        },
      },
      description: {
        translations: {
          en: '3 Meatballs on an 8-inch roll topped with mozzarella. Served with Stoppe Salad.',
        },
      },
      price_info: {
        price: 1200,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice_of_Meat_Ball_43817', 'Choice_of_Sauce', 'Choice-of-Add-On'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Farro-Salad',
      title: {
        translations: {
          en: 'Farro Salad',
        },
      },
      description: {
        translations: {
          en: 'Farro, chickpeas, tomatoes, red onion, olives, arugula, tossed with our house-made red wine vinaigrette topped with feta. Served with Foccacia Bread.',
        },
      },
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Add-ons'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: '3_Meatball_Sliders',
      title: {
        translations: {
          en: '3 Meatball Sliders',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 695,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: "iana's_Gem_(fried_eg",
      external_data: '',
      title: {
        translations: {
          en: "iana's Gem (fried egg)",
        },
      },
      price_info: {
        price: 100,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Onions',
      external_data: '',
      title: {
        translations: {
          en: 'Onions',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            quantity: {
              max_permitted: 2,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Tomatoes_42198',
      external_data: '',
      title: {
        translations: {
          en: 'Tomatoes',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            quantity: {
              max_permitted: 2,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Spicy_Pork_12076',
      external_data: '',
      title: {
        translations: {
          en: 'Spicy Pork',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
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
    {
      id: 'Jeffy’s_Crab_Ball_44089',
      external_data: '',
      title: {
        translations: {
          en: 'Jeffy’s Crab Ball',
        },
      },
      price_info: {
        price: 1200,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            price: 1200,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Meatball_Lettuce_Wra',
      title: {
        translations: {
          en: 'Meatball Lettuce Wrap',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 695,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Pasta_Primavera_Vega',
      title: {
        translations: {
          en: 'Pasta Primavera',
        },
      },
      description: {
        translations: {
          en: 'Penne or linguine tossed with seasonal vegetables in a light garlic sauce. Served with Stopped Salad and Focaccia.',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/7ee94f34-943b-4851-8be9-be90a86533fa.jpeg',
      price_info: {
        price: 1300,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Preparatio'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['CAT_PREPARED_FOOD', 'TEMP_HEATED'],
          source: 2,
        },
      },
    },
    {
      id: 'Pasta-Bowl',
      title: {
        translations: {
          en: 'Pasta Bowl',
        },
      },
      description: {
        translations: {
          en: 'Choice of Sauce with mushrooms, zucchini, peppers, and onions.',
        },
      },
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Pasta', 'Choice_of_Sauce', 'Choice-of-Add-Ons'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Stoppe_Trio_10012',
      title: {
        translations: {
          en: 'Stoppe Trio',
        },
      },
      description: {
        translations: {
          en: 'Served with a side, stoppe salad, and any style meatball.',
        },
      },
      price_info: {
        price: 1295,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice_of_Meat_Ball_43817', 'Choice_of_Sauce', 'Choice_of_Side_70640', 'Choice-of-Add-On'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Create-your-Own-Past',
      title: {
        translations: {
          en: 'Create your Own Pasta Bowl  ',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Side', 'Choice-of-Sauces-07213', 'Choice-of-Veggies', 'Choice-of-Meatballs-76370'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Mushrooms',
      external_data: '',
      title: {
        translations: {
          en: 'Mushrooms',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Veggies',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Veggies',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Linguine',
      external_data: '',
      title: {
        translations: {
          en: 'Linguine',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Pasta',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Preparatio',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Pasta',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Preparatio',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'The_Vegetarian_(Glut',
      external_data: '',
      title: {
        translations: {
          en: 'The Vegetarian (Gluten free)',
        },
      },
      price_info: {
        price: 400,
        overrides: [],
      },
      quantity_info: {
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
    {
      id: 'Pasta_Fagioli',
      title: {
        translations: {
          en: "Noona's Pasta Fagioli",
        },
      },
      description: {
        translations: {
          en: 'Linguine simmered with white cannellini beans, fresh herbs, and bold Italian flavors.',
        },
      },
      price_info: {
        price: 1300,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Cheese_Focaccia_Pizz',
      title: {
        translations: {
          en: 'Focaccia Cheese Pizza',
        },
      },
      description: {
        translations: {
          en: 'Freshly baked focaccia topped with Roasted Tomato sauce and mozzarella.',
        },
      },
      price_info: {
        price: 900,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice_of_Toppings'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Stoppe_Salad',
      title: {
        translations: {
          en: 'Stoppe Salad',
        },
      },
      description: {
        translations: {
          en: 'Garden fresh arugula, romaine, cherry tomatoes, red onions, roasted corn, feta cheese, with our house-made red wine vinaigrette. Served with focaccia bread.',
        },
      },
      price_info: {
        price: 800,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Add-ons'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Vegan-Pesto',
      title: {
        translations: {
          en: 'Vegan Pesto',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauces',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauces',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Polenta',
      external_data: '',
      title: {
        translations: {
          en: 'Polenta',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Vegan-Pesto-18454',
      external_data: '',
      title: {
        translations: {
          en: 'Vegan Pesto',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauce',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauce',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Iana’s_Gem',
      external_data: '',
      title: {
        translations: {
          en: 'Iana’s Gem',
        },
      },
      price_info: {
        price: 150,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            price: 150,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Creamy_Polenta_05969',
      title: {
        translations: {
          en: 'Creamy Polenta',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/97aaf72f-881a-4722-bbef-7412f490b676',
      price_info: {
        price: 625,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Garlic_Focaccia_Bite',
      title: {
        translations: {
          en: 'Garlic Focaccia Bites',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 695,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Gator_Meatball',
      external_data: '',
      title: {
        translations: {
          en: 'Gator Meatball',
        },
      },
      price_info: {
        price: 1200,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            price: 1200,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      dish_info: {},
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Meatball-Flight',
      title: {
        translations: {
          en: 'Meatball Flight',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 2000,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Peppers-and-onions',
      external_data: '',
      title: {
        translations: {
          en: 'Peppers and onions',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Veggies',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Veggies',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Penne_Pasta_34189',
      title: {
        translations: {
          en: 'Penne Pasta',
        },
      },
      description: {
        translations: {
          en: 'With choice of sauce.',
        },
      },
      price_info: {
        price: 400,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Size', 'Choice_of_Sauce_67596', 'Choice_of_Dietary_Su'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Vegan-20307',
      title: {
        translations: {
          en: 'Vegan ',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 200,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Meatballs-76370',
            price: 200,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Meatballs-76370',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Roasted_Tomato_(Glut',
      external_data: '',
      title: {
        translations: {
          en: 'Roasted Tomato (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Sauce_67596',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Stoppe-Trio',
      title: {
        translations: {
          en: 'Stoppe Trio',
        },
      },
      description: {
        translations: {
          en: 'Three balls, side, Stoppe salad and focaccia. \n',
        },
      },
      price_info: {
        price: 1300,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Nonna’s_Traditiona',
      external_data: '',
      title: {
        translations: {
          en: 'Nonna’s Traditional Italian',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
      },
      suspension_info: {
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
    {
      id: 'Baked_Mozzarella',
      title: {
        translations: {
          en: 'Baked Mozzarella',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 795,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Focaccia_Pizza_23097',
      title: {
        translations: {
          en: 'Focaccia Pizza',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 1095,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Peppers-and-Onions-i-06635',
      external_data: '',
      title: {
        translations: {
          en: 'Peppers and Onions in White Wine Sauce',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauces-07213',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Sauces-07213',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Vegetarian_(Gluten_F',
      external_data: '',
      title: {
        translations: {
          en: 'Vegetarian (Gluten Free)',
        },
      },
      price_info: {
        price: 200,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 200,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 200,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
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
    {
      id: 'Coffee',
      title: {
        translations: {
          en: 'Coffee',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 150,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      dish_info: {
        classifications: {},
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_DRINK'],
          source: 2,
        },
      },
    },
    {
      id: 'Eggplant-Quinoa',
      external_data: '',
      title: {
        translations: {
          en: 'Eggplant Quinoa',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Linguine-15533',
      external_data: '',
      title: {
        translations: {
          en: 'Linguine',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Side',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Side',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Creamy_Polenta_60235',
      title: {
        translations: {
          en: 'Creamy Polenta',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 400,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Size'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 2,
        },
      },
    },
    {
      id: 'Sausage_Peppers_and_',
      external_data: '',
      title: {
        translations: {
          en: 'Sausage Peppers and Onions (Gluten free)',
        },
      },
      price_info: {
        price: 200,
        overrides: [],
      },
      quantity_info: {
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
    {
      id: '5_Balls',
      title: {
        translations: {
          en: '5 Balls',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/7e2650a7-d63d-4013-9dc0-21590d61df62.jpeg',
      price_info: {
        price: 895,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Meatballs-50247'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['CAT_PREPARED_FOOD', 'TEMP_UNHEATED'],
          source: 2,
        },
      },
    },
    {
      id: 'Sprite_26076',
      title: {
        translations: {
          en: 'Sprite',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 295,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['CAT_PREPARED_DRINK', 'TEMP_COLD'],
          source: 3,
        },
      },
    },
    {
      id: 'Anchovies_95610',
      external_data: '',
      title: {
        translations: {
          en: 'Anchovies',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Second_Top',
            quantity: {
              max_permitted: 2,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_First_Topp',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Tomatoes-52501',
      external_data: '',
      title: {
        translations: {
          en: 'Tomatoes',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 100,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Toppings',
            price: 100,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Toppings',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Lamb',
      external_data: '',
      title: {
        translations: {
          en: 'Lamb',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball_43817',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 8640000000,
        },
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
    {
      id: 'Penne_Pasta_(Gluten_',
      external_data: '',
      title: {
        translations: {
          en: 'Penne Pasta (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Pasta',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Pasta',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
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
    {
      id: 'Jeffy’s_Sausage_(G_86771',
      external_data: '',
      title: {
        translations: {
          en: 'Jeffy’s Sausage (Gluten Free)',
        },
      },
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice_of_Meat_Ball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice_of_Meatball_31631',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball-(',
            quantity: {
              max_permitted: 5,
            },
          },
        ],
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
    {
      id: 'Vegan',
      title: {
        translations: {
          en: 'Vegan',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 200,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_HEATED', 'CAT_PREPARED_FOOD'],
          source: 1,
        },
      },
    },
    {
      id: 'Coke_61459',
      title: {
        translations: {
          en: 'Coke',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 295,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['CAT_PREPARED_DRINK', 'TEMP_COLD'],
          source: 3,
        },
      },
    },
    {
      id: 'Iced_Cappuccino',
      title: {
        translations: {
          en: 'Iced Cappuccino',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      price_info: {
        price: 375,
        overrides: [],
      },
      quantity_info: {
        overrides: [],
      },
      suspension_info: {
        overrides: [],
      },
      tax_info: {
        tax_rate: 6.5,
      },
      nutritional_info: {},
      dish_info: {
        classifications: {
          alcoholic_items: 0,
        },
      },
      tax_label_info: {
        default_value: {
          labels: ['TEMP_COLD', 'CAT_PREPARED_DRINK'],
          source: 2,
        },
      },
    },
  ],
  modifier_groups: [
    {
      id: 'Choice-of-Meatballs-50247',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Meatballs',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 5,
          max_permitted: 5,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Eggplant-Quinoa-Ball',
          type: 'ITEM',
        },
        {
          id: 'Vegetarian-ball-26049',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Sauces',
      title: {
        translations: {
          en: 'Sauces',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Roasted_Tomato_Sauce',
          type: 'ITEM',
        },
        {
          id: 'Pesto',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Preparatio',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Preparation',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Penne',
          type: 'ITEM',
        },
        {
          id: 'Linguine',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Add_on',
      title: {
        translations: {
          en: 'Add on',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 0,
          max_permitted: 2,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: "iana's_Gem_(fried_eg",
          type: 'ITEM',
        },
        {
          id: 'One_Ciabatta_Roll',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Beverage',
      title: {
        translations: {
          en: 'Choice of Beverage',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Coke',
          type: 'ITEM',
        },
        {
          id: 'Diet_Coke_45631',
          type: 'ITEM',
        },
        {
          id: 'Sprite',
          type: 'ITEM',
        },
        {
          id: 'Fanta_Orange',
          type: 'ITEM',
        },
        {
          id: 'Unsweet_Tea',
          type: 'ITEM',
        },
        {
          id: 'Lemonade',
          type: 'ITEM',
        },
        {
          id: 'Coffee_06635',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Pasta',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Pasta ',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Penne_Pasta',
          type: 'ITEM',
        },
        {
          id: 'Penne_Pasta_(Gluten_',
          type: 'ITEM',
        },
        {
          id: 'Linguine',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Meat_Ball',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Meat Ball',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 5,
          max_permitted: 5,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: "Jeffy's_Crab_Ball_68449",
          type: 'ITEM',
        },
        {
          id: 'Nonna’s_Traditiona',
          type: 'ITEM',
        },
        {
          id: 'Gator_Meatballs',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Buffalo_Bleu_13381',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Marsala_(Glu_70606',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Parmigiana_(_82533',
          type: 'ITEM',
        },
        {
          id: 'Vegetarian',
          type: 'ITEM',
        },
        {
          id: 'Lamb',
          type: 'ITEM',
        },
        {
          id: 'Spicy_Pork_12076',
          type: 'ITEM',
        },
        {
          id: 'Sausage_Pepper_and_O',
          type: 'ITEM',
        },
        {
          id: 'Polenta',
          type: 'ITEM',
        },
        {
          id: 'Jeffy’s_Sausage_(G_86771',
          type: 'ITEM',
        },
        {
          id: 'Eggplant-Quinoa',
          type: 'ITEM',
        },
        {
          id: 'Macaroni_and_Cheese__74559',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Meat_Ball_43817',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Meat Ball',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 3,
          max_permitted: 3,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: "Jeffy's_Crab_Ball_68449",
          type: 'ITEM',
        },
        {
          id: 'Nonna’s_Traditiona',
          type: 'ITEM',
        },
        {
          id: 'Gator_Meatball_90897',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Buffalo_Bleu_13381',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Marsala_(Glu',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Parmigiana_(_82533',
          type: 'ITEM',
        },
        {
          id: 'Vegetarian_(Gluten_F',
          type: 'ITEM',
        },
        {
          id: 'Lamb',
          type: 'ITEM',
        },
        {
          id: 'Spicy_Pork_12076',
          type: 'ITEM',
        },
        {
          id: 'Sausage_Pepper_and_O',
          type: 'ITEM',
        },
        {
          id: 'Polenta',
          type: 'ITEM',
        },
        {
          id: 'Jeffy’s_Sausage_(G',
          type: 'ITEM',
        },
        {
          id: 'Eggplant-Quinoa',
          type: 'ITEM',
        },
        {
          id: 'Macaroni_and_Cheese__74559',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Sauce_67596',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Sauce',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Roasted_Tomato_(Glut',
          type: 'ITEM',
        },
        {
          id: 'Creamy_Provolone_(Gl',
          type: 'ITEM',
        },
        {
          id: 'Isabella’s_Signatu',
          type: 'ITEM',
        },
        {
          id: 'Buffalo_Bleu_(Gluten',
          type: 'ITEM',
        },
        {
          id: 'Marsala_Mushroom_(Gl',
          type: 'ITEM',
        },
        {
          id: 'Spicy_Pork_(Gluten_F',
          type: 'ITEM',
        },
        {
          id: 'Peppers_and_Onions_(',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Veggies',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Veggies',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Mushrooms',
          type: 'ITEM',
        },
        {
          id: 'Zucchini',
          type: 'ITEM',
        },
        {
          id: 'Peppers-and-onions',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Sauce',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Sauce',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Roasted_Tomato_(Glut',
          type: 'ITEM',
        },
        {
          id: 'Creamy_Provolone_(Gl',
          type: 'ITEM',
        },
        {
          id: 'Isabella’s_Signatu',
          type: 'ITEM',
        },
        {
          id: 'Buffalo_Bleu_(Gluten',
          type: 'ITEM',
        },
        {
          id: 'Marsala_Mushroom_(Gl',
          type: 'ITEM',
        },
        {
          id: 'Spicy_Pork_(Gluten_F',
          type: 'ITEM',
        },
        {
          id: 'Peppers_and_Onions_(',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_First_Topp',
      external_data: '',
      title: {
        translations: {
          en: 'Choose One Topping',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Meatball',
          type: 'ITEM',
        },
        {
          id: 'Isabella’s_Pesto',
          type: 'ITEM',
        },
        {
          id: 'Salami_98516',
          type: 'ITEM',
        },
        {
          id: 'Banana_Peppers',
          type: 'ITEM',
        },
        {
          id: 'Onions',
          type: 'ITEM',
        },
        {
          id: 'Red_Peppers_55518',
          type: 'ITEM',
        },
        {
          id: 'Olives_63729',
          type: 'ITEM',
        },
        {
          id: 'Anchovies_95610',
          type: 'ITEM',
        },
        {
          id: 'Tomatoes_42198',
          type: 'ITEM',
        },
        {
          id: 'Arugula',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Sauces',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Sauces',
        },
      },
      quantity_info: {
        quantity: {
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Roasted-Tomato',
          type: 'ITEM',
        },
        {
          id: 'Vegan-Pesto',
          type: 'ITEM',
        },
        {
          id: 'Peppers-and-Onions-i',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Sauces-07213',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Sauces ',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Roasted-Tomato-27558',
          type: 'ITEM',
        },
        {
          id: 'Vegan-Pesto-04016',
          type: 'ITEM',
        },
        {
          id: 'Peppers-and-Onions-i-06635',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Meat_Ball_67598',
      title: {
        translations: {
          en: 'Choice of Meat Ball',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Nonna’s_Traditiona',
          type: 'ITEM',
        },
        {
          id: 'Sausage_Pepper_and_O',
          type: 'ITEM',
        },
        {
          id: 'Jeffy’s_Sausage_(G_86771',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Marsala_(Glu_70606',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Parmigiana_(_82533',
          type: 'ITEM',
        },
        {
          id: 'Vegetarian_(Gluten_F',
          type: 'ITEM',
        },
        {
          id: 'Spicy_Pork_12076',
          type: 'ITEM',
        },
        {
          id: 'Maccaroni_and_Cheese',
          type: 'ITEM',
        },
        {
          id: 'Lamb',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Sauce',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Sauce',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Vegan-Pesto-18454',
          type: 'ITEM',
        },
        {
          id: 'Roasted-Tomato-Sauce',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Meatball',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Meatball',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Crab_Ball',
          type: 'ITEM',
        },
        {
          id: 'Nonna’s_Traditiona',
          type: 'ITEM',
        },
        {
          id: 'Gator_Meatball_90897',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Buffalo_Bleu_13381',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Marsala_(Glu_70606',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Parmigiana_(_82533',
          type: 'ITEM',
        },
        {
          id: 'Vegetarian_(Gluten_F',
          type: 'ITEM',
        },
        {
          id: 'Spicy_Pork_12076',
          type: 'ITEM',
        },
        {
          id: 'Sausage_Pepper_and_O',
          type: 'ITEM',
        },
        {
          id: 'Polenta',
          type: 'ITEM',
        },
        {
          id: 'Jeffy’s_Sausage_(G_86771',
          type: 'ITEM',
        },
        {
          id: 'Eggplant-Quinoa',
          type: 'ITEM',
        },
        {
          id: 'Macaroni_and_Cheese__74559',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Sauce_-_fo',
      title: {
        translations: {
          en: 'Choice of Sauce - for Side Pasta',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 0,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Roasted_Tomato_(Glut',
          type: 'ITEM',
        },
        {
          id: 'Peppers_and_Onions_(',
          type: 'ITEM',
        },
        {
          id: 'Creamy_Provolone_(Gl',
          type: 'ITEM',
        },
        {
          id: 'Marsala_Mushroom_(Gl',
          type: 'ITEM',
        },
        {
          id: 'Isabella’s_Signatu',
          type: 'ITEM',
        },
        {
          id: 'Buffalo_Bleu_(Gluten',
          type: 'ITEM',
        },
        {
          id: 'Spicy_Pork_(Gluten_F',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Side',
      title: {
        translations: {
          en: 'Choice of Side',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Polenta',
          type: 'ITEM',
        },
        {
          id: 'White_Bean_Ragu',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Dietary_Su',
      title: {
        translations: {
          en: 'Choice of Dietary Substitution',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 0,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Gluten_Free',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Second_Top',
      external_data: '',
      title: {
        translations: {
          en: 'Choose Two Toppings',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 2,
          max_permitted: 2,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Meatball',
          type: 'ITEM',
        },
        {
          id: 'Isabella’s_Pesto',
          type: 'ITEM',
        },
        {
          id: 'Salami_98516',
          type: 'ITEM',
        },
        {
          id: 'Banana_Peppers',
          type: 'ITEM',
        },
        {
          id: 'Onions',
          type: 'ITEM',
        },
        {
          id: 'Red_Peppers_55518',
          type: 'ITEM',
        },
        {
          id: 'Olives_63729',
          type: 'ITEM',
        },
        {
          id: 'Anchovies_95610',
          type: 'ITEM',
        },
        {
          id: 'Tomatoes_42198',
          type: 'ITEM',
        },
        {
          id: 'Arugula',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Add-On',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Add On',
        },
      },
      quantity_info: {
        quantity: {
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Fried-Egg',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Meatball-(',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Meatball',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 5,
          max_permitted: 5,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Nonna’s_Traditiona',
          type: 'ITEM',
        },
        {
          id: 'Crab_Ball',
          type: 'ITEM',
        },
        {
          id: 'Gator_Meatball_90897',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Buffalo_Bleu_13381',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Marsala_(Glu_70606',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Parmigiana_(_82533',
          type: 'ITEM',
        },
        {
          id: 'Vegetarian_(Gluten_F',
          type: 'ITEM',
        },
        {
          id: 'Spicy_Pork_12076',
          type: 'ITEM',
        },
        {
          id: 'Sausage_Pepper_and_O',
          type: 'ITEM',
        },
        {
          id: 'Polenta',
          type: 'ITEM',
        },
        {
          id: 'Jeffy’s_Sausage_(G_86771',
          type: 'ITEM',
        },
        {
          id: 'Eggplant-Quinoa',
          type: 'ITEM',
        },
        {
          id: 'Macaroni_and_Cheese__74559',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Add-Ons',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Add Ons',
        },
      },
      quantity_info: {
        quantity: {
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Fried-Shrimp',
          type: 'ITEM',
        },
        {
          id: 'Sauteed-Shrimp',
          type: 'ITEM',
        },
        {
          id: 'Fried-Egg',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Toppings',
      title: {
        translations: {
          en: 'Toppings',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 6,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Vegan_Meatball',
          type: 'ITEM',
        },
        {
          id: 'Banana_Peppers_90928',
          type: 'ITEM',
        },
        {
          id: 'Onions_66952',
          type: 'ITEM',
        },
        {
          id: 'Red_Peppers',
          type: 'ITEM',
        },
        {
          id: 'Tomatoes',
          type: 'ITEM',
        },
        {
          id: 'Arugula_02698',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Sides',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Sides',
        },
      },
      quantity_info: {
        quantity: {
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'White-Bean-Ragu',
          type: 'ITEM',
        },
        {
          id: 'Linguine-36561',
          type: 'ITEM',
        },
        {
          id: 'Penne-30612',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Meatball_08710',
      title: {
        translations: {
          en: 'Choice of Meatball',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Nonna’s_Traditiona',
          type: 'ITEM',
        },
        {
          id: 'Sausage_Pepper_and_O',
          type: 'ITEM',
        },
        {
          id: 'Jeffy’s_Sausage_(G_86771',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Marsala_(Glu_70606',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Parmigiana_(_82533',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Buffalo_Bleu_13381',
          type: 'ITEM',
        },
        {
          id: 'Veggie_Ball_(Gluten_',
          type: 'ITEM',
        },
        {
          id: 'Spicy_Pork_(Gluten_F',
          type: 'ITEM',
        },
        {
          id: 'Macaroni_and_Cheese_',
          type: 'ITEM',
        },
        {
          id: 'Lamb_(Gluten_Free)',
          type: 'ITEM',
        },
        {
          id: 'Jeffy’s_Crab_Ball',
          type: 'ITEM',
        },
        {
          id: 'Gator_Meatball_90897',
          type: 'ITEM',
        },
        {
          id: 'Iana’s_Gem',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Side_70640',
      title: {
        translations: {
          en: 'Choice of Side',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Creamy_Polenta',
          type: 'ITEM',
        },
        {
          id: 'White_Bean_Ragu',
          type: 'ITEM',
        },
        {
          id: 'Penne_Pasta',
          type: 'ITEM',
        },
        {
          id: 'Penne_Pasta_(Gluten_',
          type: 'ITEM',
        },
        {
          id: 'Linguine',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Add_Meatball',
      title: {
        translations: {
          en: 'Add Meatball',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 0,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: "Nonna's_Traditional_",
          type: 'ITEM',
        },
        {
          id: 'Sausage_Peppers_and_',
          type: 'ITEM',
        },
        {
          id: "Jeffy's_Sausage_(Glu",
          type: 'ITEM',
        },
        {
          id: 'Spicy_Pork',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Marsala_(Glu_51979',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Parmigiana_(',
          type: 'ITEM',
        },
        {
          id: 'Mac_and_Cheese_Meatb',
          type: 'ITEM',
        },
        {
          id: 'The_Vegetarian_(Glut',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Buffalo_Bleu',
          type: 'ITEM',
        },
        {
          id: "Jeffy's_Crab_Ball",
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Toppings',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Toppings',
        },
      },
      quantity_info: {
        quantity: {
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Banana-Peppers',
          type: 'ITEM',
        },
        {
          id: 'Onions-88527',
          type: 'ITEM',
        },
        {
          id: 'Peppers',
          type: 'ITEM',
        },
        {
          id: 'Tomatoes-52501',
          type: 'ITEM',
        },
        {
          id: 'Arugula-15480',
          type: 'ITEM',
        },
        {
          id: 'Olives-96586',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Toppings',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Toppings',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 0,
          max_permitted: 10,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Meatball_04038',
          type: 'ITEM',
        },
        {
          id: 'Banana_Peppers_90928',
          type: 'ITEM',
        },
        {
          id: 'Onions_66952',
          type: 'ITEM',
        },
        {
          id: 'Red_Peppers',
          type: 'ITEM',
        },
        {
          id: 'Tomatoes',
          type: 'ITEM',
        },
        {
          id: 'Anchovies',
          type: 'ITEM',
        },
        {
          id: 'Arugula_02698',
          type: 'ITEM',
        },
        {
          id: 'Olives',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Add-ons',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Add ons',
        },
      },
      quantity_info: {
        quantity: {
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Fried-Shrimp',
          type: 'ITEM',
        },
        {
          id: 'Sauteed-Shrimp',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Add_Protein',
      title: {
        translations: {
          en: 'Add Protein',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 0,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: "Nonna's_Traditional_",
          type: 'ITEM',
        },
        {
          id: 'Sausage_Peppers_and_',
          type: 'ITEM',
        },
        {
          id: "Jeffy's_Sausage_(Glu",
          type: 'ITEM',
        },
        {
          id: 'Spicy_Pork',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Marsala_(Glu_51979',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Parmigiana_(',
          type: 'ITEM',
        },
        {
          id: 'Mac_and_Cheese_Meatb',
          type: 'ITEM',
        },
        {
          id: 'The_Vegetarian_(Glut',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Buffalo_Bleu',
          type: 'ITEM',
        },
        {
          id: 'Crab_Ball',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Side',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Side',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Penne-88599',
          type: 'ITEM',
        },
        {
          id: 'Linguine-15533',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Meatballs-76370',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Meatballs ',
        },
      },
      quantity_info: {
        quantity: {
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Vegan-20307',
          type: 'ITEM',
        },
        {
          id: 'Eggplant-Quinoa-30138',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Sauce-54863',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Sauce',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Vegan-Pesto-92011',
          type: 'ITEM',
        },
        {
          id: 'Roasted-Tomato-Sauce-25702',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Size',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Size',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Small',
          type: 'ITEM',
        },
        {
          id: 'Large',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice_of_Meatball_31631',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Meatball',
        },
      },
      quantity_info: {
        quantity: {
          min_permitted: 1,
          max_permitted: 1,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: 'Nonna’s_Traditiona',
          type: 'ITEM',
        },
        {
          id: 'Sausage_Pepper_and_O',
          type: 'ITEM',
        },
        {
          id: 'Jeffy’s_Sausage_(G_86771',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Marsala_(Glu_70606',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Parmigiana_(_82533',
          type: 'ITEM',
        },
        {
          id: 'Chicken_Buffalo_Bleu_13381',
          type: 'ITEM',
        },
        {
          id: 'Vegetarian_(Gluten_F_13863',
          type: 'ITEM',
        },
        {
          id: 'Spicy_Pork_12076',
          type: 'ITEM',
        },
        {
          id: 'Macaroni_and_Cheese__74559',
          type: 'ITEM',
        },
        {
          id: 'Iana’s_Gem',
          type: 'ITEM',
        },
        {
          id: 'Jeffy’s_Crab_Ball_44089',
          type: 'ITEM',
        },
        {
          id: 'Gator_Meatball',
          type: 'ITEM',
        },
      ],
    },
  ],
  display_options: {
    disable_item_instructions: false,
  },
};
