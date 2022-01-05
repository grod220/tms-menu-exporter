import { EntireMenu } from '../index';

const primoVegan: EntireMenu = {
  menus: [
    {
      id: 'Menu',
      title: {
        translations: {
          en: 'Menu',
        },
      },
      subtitle: {
        translations: {
          en: '',
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
      category_ids: ['Starters', 'The Meatball Stoppe Classic', 'Salad', 'Sandwiches', 'Famiglia Favorites', 'Sides'],
    },
  ],
  categories: [
    {
      id: 'Famiglia Favorites',
      title: {
        translations: {
          en: 'Famiglia Favorites',
        },
      },
      entities: [
        {
          id: '15',
          type: 'ITEM',
        },
        {
          id: '16',
          type: 'ITEM',
        },
        {
          id: '17',
          type: 'ITEM',
        },
        {
          id: '18',
          type: 'ITEM',
        },
        {
          id: '19',
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
          id: '20',
          type: 'ITEM',
        },
        {
          id: '21',
          type: 'ITEM',
        },
        {
          id: '22',
          type: 'ITEM',
        },
        {
          id: '23',
          type: 'ITEM',
        },
        {
          id: 'Meatball-02099',
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
          id: '1',
          type: 'ITEM',
        },
        {
          id: '2',
          type: 'ITEM',
        },
        {
          id: '3',
          type: 'ITEM',
        },
        {
          id: '4',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'The Meatball Stoppe Classic',
      title: {
        translations: {
          en: 'The Meatball Stoppe Classic',
        },
      },
      entities: [
        {
          id: '5',
          type: 'ITEM',
        },
        {
          id: '6',
          type: 'ITEM',
        },
        {
          id: '7',
          type: 'ITEM',
        },
        {
          id: '8',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Salad',
      title: {
        translations: {
          en: 'Salad',
        },
      },
      entities: [
        {
          id: '9',
          type: 'ITEM',
        },
        {
          id: '10',
          type: 'ITEM',
        },
        {
          id: '11',
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
          id: '12',
          type: 'ITEM',
        },
        {
          id: '13',
          type: 'ITEM',
        },
        {
          id: '14',
          type: 'ITEM',
        },
      ],
    },
  ],
  items: [
    {
      id: '13',
      external_data: '',
      title: {
        translations: {
          en: 'Grande Smash',
        },
      },
      description: {
        translations: {
          en: "3 Meatballs on a 8' Focaccia Roll",
        },
      },
      image_url: '',
      price_info: {
        price: 1200,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Copy-of-Choice-of-Me'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '9851',
      external_data: '',
      title: {
        translations: {
          en: 'Vegan Plant',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '16',
      external_data: '',
      title: {
        translations: {
          en: 'Pasta Primavera',
        },
      },
      description: {
        translations: {
          en: 'Penne tossed with seasonal vegetables in a light garlic sauce. Served with stopped salad and focaccia.',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/ac6ff454-58cd-4f44-9970-93d6d3b42c9d.jpeg',
      price_info: {
        price: 1300,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '9852',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '7',
      external_data: '',
      title: {
        translations: {
          en: 'Focaccia Pizza',
        },
      },
      description: {
        translations: {
          en: 'Freshly baked focaccia.',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/ee85998e-ffca-406d-829a-ab885ec27509.jpeg',
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Sauce', 'Choose your add-on', 'Choose your toppings1'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '5',
      external_data: '',
      title: {
        translations: {
          en: 'Meatball Flight (5 Pcs)',
        },
      },
      description: {
        translations: {
          en: 'Side, focaccia, and beverage.',
        },
      },
      image_url: '',
      price_info: {
        price: 2000,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choice-of-Meatball'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '21',
      external_data: '',
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
      image_url: '',
      price_info: {
        price: 600,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '18',
      external_data: '',
      title: {
        translations: {
          en: "Nonna's Pasta Fagioli",
        },
      },
      description: {
        translations: {
          en: 'Linguine simmered with white canneline beans, fresh herbs, and bold Italian flavors. Served with stopped salad and focaccia.',
        },
      },
      image_url: '',
      price_info: {
        price: 1300,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9872',
      external_data: '',
      title: {
        translations: {
          en: 'Marsala Mushroom Peppers',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegetarian)',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegetarian)',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '14',
      external_data: '',
      title: {
        translations: {
          en: 'Eggplant Panini',
        },
      },
      description: {
        translations: {
          en: 'Breaded eggplant topped with roasted tomato, arugula, peppers, and onions on focaccia.',
        },
      },
      image_url: '',
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9855',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            price: 100,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            quantity: {
              max_permitted: 10,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9863',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings2',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings2',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9861',
      external_data: '',
      title: {
        translations: {
          en: 'Meatballs',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 200,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your add-on',
            price: 200,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your add-on',
            quantity: {
              max_permitted: 20,
            },
          },
        ],
      },
      modifier_group_ids: {
        ids: ['Copy-of-Choose-your-'],
        overrides: [
          {
            context_type: 'CUSTOMIZATION',
            context_value: 'Choose your add-on',
            ids: ['Copy-of-Choose-your-'],
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '10',
      external_data: '',
      title: {
        translations: {
          en: 'Farro Salad',
        },
      },
      description: {
        translations: {
          en: 'Farro chick peas, tomatoes, red onions, olives, and arugula tossed with our homemade red wine vinaigrette.',
        },
      },
      image_url: '',
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '4',
      external_data: '',
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
      image_url: '',
      price_info: {
        price: 700,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '20',
      external_data: '',
      title: {
        translations: {
          en: 'Polenta',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: 'https://d1ralsognjng37.cloudfront.net/10c04983-1e5a-499e-8c12-4d26bbe04357.jpeg',
      price_info: {
        price: 600,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '9870',
      external_data: '',
      title: {
        translations: {
          en: 'Pesto',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegetarian)',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegetarian)',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9854',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Sauce',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
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
      id: '9874',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegan)',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegan)',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: 'Eggplant-Quinoa-69702',
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
            context_value: 'Choice-of-Meatball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Copy-of-Choice-of-Me',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball',
            quantity: {
              max_permitted: 5,
            },
          },
          {
            context_type: 2,
            context_value: 'Copy-of-Choice-of-Me',
            quantity: {
              max_permitted: 3,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: 'Meatball-02099',
      title: {
        translations: {
          en: 'Meatball',
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
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Copy-of-Choose-your-'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '9873',
      external_data: '',
      title: {
        translations: {
          en: 'Onions in a White Wine Sauce',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegetarian)',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegetarian)',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9864',
      external_data: '',
      title: {
        translations: {
          en: 'Peppers and Onions',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings2',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings2',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '9857',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            price: 100,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            quantity: {
              max_permitted: 10,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '3',
      external_data: '',
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
      image_url: '',
      price_info: {
        price: 700,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9875',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegan)',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Sauce',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegan)',
            quantity: {
              max_permitted: 1,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Sauce',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '6',
      external_data: '',
      title: {
        translations: {
          en: 'Stoppe Trio (3 Pcs)',
        },
      },
      description: {
        translations: {
          en: 'Side, stoppe salad, and focaccia.',
        },
      },
      image_url: '',
      price_info: {
        price: 1300,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Copy-of-Choice-of-Me'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: 'Choose-a-vegetarian--00800',
      title: {
        translations: {
          en: 'Choose a vegetarian sauce',
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
            context_value: 'Choose-your-sauce',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose-your-sauce',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choose your sauce (vegetarian)'],
        overrides: [
          {
            context_type: 'CUSTOMIZATION',
            context_value: 'Choose-your-sauce',
            ids: ['Choose your sauce (vegetarian)'],
          },
        ],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '9868',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your pasta',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9866',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your pasta1',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9858',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            price: 100,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            quantity: {
              max_permitted: 10,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '11',
      external_data: '',
      title: {
        translations: {
          en: 'Roasted Vegetable Salad',
        },
      },
      description: {
        translations: {
          en: 'Seasonal fresh vegetables, garlic herbs, and spices over a bed of greens.',
        },
      },
      image_url: '',
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '1',
      external_data: '',
      title: {
        translations: {
          en: 'Ball Sampler (5 Pcs)',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 900,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choose your style', 'Choose your toppings'],
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9',
      external_data: '',
      title: {
        translations: {
          en: 'Stoppe Salad',
        },
      },
      description: {
        translations: {
          en: 'Garden fresh arugula, Romaine, cherry tomatoes, red onions, and roasted corn with our housemade red wine vinaigrette.',
        },
      },
      image_url: '',
      price_info: {
        price: 800,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '12',
      external_data: '',
      title: {
        translations: {
          en: 'Meatball Smash',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 1000,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Copy-of-Choose-your-'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '9876',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegan)',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegan)',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '17',
      external_data: '',
      title: {
        translations: {
          en: 'Pasta Agila E Olio',
        },
      },
      description: {
        translations: {
          en: 'Linguine tossed with garlic olive oil, red pepper flakes, and fresh basil. Served with stopped salad and focaccia.',
        },
      },
      image_url: '',
      price_info: {
        price: 1200,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9867',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your pasta',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9860',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            price: 100,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            quantity: {
              max_permitted: 10,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9862',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings2',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings2',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '8',
      external_data: '',
      title: {
        translations: {
          en: 'Create your own Pasta Bowl',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choose your pasta', 'Choose-your-sauce', 'Choose your toppings2', 'Choose your add-on'],
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '9869',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegetarian)',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegetarian)',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9871',
      external_data: '',
      title: {
        translations: {
          en: 'Creamy Provolone',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegetarian)',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegetarian)',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9850',
      external_data: '',
      title: {
        translations: {
          en: 'Eggplant',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your style',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Copy-of-Choose-your-',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your style',
            quantity: {
              max_permitted: 5,
            },
          },
          {
            context_type: 2,
            context_value: 'Copy-of-Choose-your-',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '15',
      external_data: '',
      title: {
        translations: {
          en: 'Eggplant Stack',
        },
      },
      description: {
        translations: {
          en: 'Breaded eggplant, stuffed with veggies, and topped with roasted tomato sauce. Served with stopped salad and focaccia.',
        },
      },
      image_url: '',
      price_info: {
        price: 1300,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choose your pasta1'],
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '19',
      external_data: '',
      title: {
        translations: {
          en: 'Classic Pasta',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 1100,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '23',
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
      image_url: '',
      price_info: {
        price: 600,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '9859',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            price: 100,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            quantity: {
              max_permitted: 10,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9865',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your pasta1',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '2',
      external_data: '',
      title: {
        translations: {
          en: 'Garlic Focaccia Sticks',
        },
      },
      description: {
        translations: {
          en: 'Served with roasted tomato sauce.',
        },
      },
      image_url: '',
      price_info: {
        price: 700,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9849',
      external_data: '',
      title: {
        translations: {
          en: 'Veggie',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your style',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Copy-of-Choice-of-Me',
            price: 0,
          },
          {
            context_type: 2,
            context_value: 'Copy-of-Choose-your-',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your style',
            quantity: {
              max_permitted: 5,
            },
          },
          {
            context_type: 2,
            context_value: 'Choice-of-Meatball',
            quantity: {
              max_permitted: 5,
            },
          },
          {
            context_type: 2,
            context_value: 'Copy-of-Choice-of-Me',
            quantity: {
              max_permitted: 3,
            },
          },
          {
            context_type: 2,
            context_value: 'Copy-of-Choose-your-',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '9877',
      external_data: '',
      title: {
        translations: {
          en: 'Peppers and Onion Sauce',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegan)',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your sauce (vegan)',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '9853',
      external_data: '',
      title: {
        translations: {
          en: 'Vegan Plant',
        },
      },
      description: {
        translations: {
          en: '',
        },
      },
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            price: 0,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      tax_info: {},
      nutritional_info: {},
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
      id: '22',
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
      image_url: '',
      price_info: {
        price: 600,
        overrides: [],
      },
      quantity_info: {
        quantity: {},
        overrides: [],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      tax_info: {
        tax_rate: 0,
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
      id: 'Choose-a-vegan-salsa-69869',
      title: {
        translations: {
          en: 'Choose a vegan sauce',
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
            context_value: 'Choose-your-sauce',
            price: 0,
          },
        ],
      },
      quantity_info: {
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose-your-sauce',
            quantity: {
              max_permitted: 1,
            },
          },
        ],
      },
      suspension_info: {
        suspension: {
          suspend_until: 0,
          reason: '',
        },
        overrides: [],
      },
      modifier_group_ids: {
        ids: ['Choose your sauce (vegan)'],
        overrides: [
          {
            context_type: 'CUSTOMIZATION',
            context_value: 'Choose-your-sauce',
            ids: ['Choose your sauce (vegan)'],
          },
        ],
      },
      tax_info: {
        tax_rate: 0,
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
      id: '9856',
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
      image_url: '',
      price_info: {
        price: 0,
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            price: 100,
          },
        ],
      },
      quantity_info: {
        quantity: {},
        overrides: [
          {
            context_type: 2,
            context_value: 'Choose your toppings1',
            quantity: {
              max_permitted: 10,
            },
          },
        ],
      },
      tax_info: {},
      nutritional_info: {},
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
  modifier_groups: [
    {
      id: 'Choose your toppings1',
      external_data: '',
      title: {
        translations: {
          en: 'Add Toppings',
        },
      },
      quantity_info: {
        quantity: {
          max_permitted: 10,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: '9855',
          type: 'ITEM',
        },
        {
          id: '9856',
          type: 'ITEM',
        },
        {
          id: '9857',
          type: 'ITEM',
        },
        {
          id: '9858',
          type: 'ITEM',
        },
        {
          id: '9859',
          type: 'ITEM',
        },
        {
          id: '9860',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choose your sauce (vegetarian)',
      external_data: '',
      title: {
        translations: {
          en: 'Vegetarian sauces',
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
          id: '9869',
          type: 'ITEM',
        },
        {
          id: '9870',
          type: 'ITEM',
        },
        {
          id: '9871',
          type: 'ITEM',
        },
        {
          id: '9872',
          type: 'ITEM',
        },
        {
          id: '9873',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choose your pasta',
      external_data: '',
      title: {
        translations: {
          en: 'Choose your pasta',
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
          id: '9867',
          type: 'ITEM',
        },
        {
          id: '9868',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choose your style',
      external_data: '',
      title: {
        translations: {
          en: 'Choose your style',
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
          id: '9849',
          type: 'ITEM',
        },
        {
          id: '9850',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choose your toppings',
      external_data: '',
      title: {
        translations: {
          en: 'Choose your toppings',
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
          id: '9851',
          type: 'ITEM',
        },
        {
          id: '9852',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choose your sauce (vegan)',
      external_data: '',
      title: {
        translations: {
          en: 'Vegan sauces',
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
          id: '9874',
          type: 'ITEM',
        },
        {
          id: '9875',
          type: 'ITEM',
        },
        {
          id: '9877',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choice-of-Meatball',
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
          id: '9849',
          type: 'ITEM',
        },
        {
          id: 'Eggplant-Quinoa-69702',
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
          id: '9854',
          type: 'ITEM',
        },
        {
          id: '9875',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choose-your-sauce',
      external_data: '',
      title: {
        translations: {
          en: 'Choose your sauce',
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
          id: 'Choose-a-vegetarian--00800',
          type: 'ITEM',
        },
        {
          id: 'Choose-a-vegan-salsa-69869',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choose your toppings2',
      external_data: '',
      title: {
        translations: {
          en: 'Choose your toppings',
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
          id: '9863',
          type: 'ITEM',
        },
        {
          id: '9862',
          type: 'ITEM',
        },
        {
          id: '9864',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choose your pasta1',
      external_data: '',
      title: {
        translations: {
          en: 'Choose your pasta',
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
          id: '9865',
          type: 'ITEM',
        },
        {
          id: '9866',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Copy-of-Choice-of-Me',
      external_data: '',
      title: {
        translations: {
          en: 'Choice of Meatball',
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
          id: '9849',
          type: 'ITEM',
        },
        {
          id: 'Eggplant-Quinoa-69702',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Copy-of-Choose-your-',
      external_data: '',
      title: {
        translations: {
          en: 'Choose your Meatball',
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
          id: '9849',
          type: 'ITEM',
        },
        {
          id: '9850',
          type: 'ITEM',
        },
      ],
    },
    {
      id: 'Choose your add-on',
      external_data: '',
      title: {
        translations: {
          en: 'Add Meatballs',
        },
      },
      quantity_info: {
        quantity: {
          max_permitted: 20,
        },
        overrides: [],
      },
      modifier_options: [
        {
          id: '9861',
          type: 'ITEM',
        },
      ],
    },
  ],
  display_options: {
    disable_item_instructions: false,
  },
};
