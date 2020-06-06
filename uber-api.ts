import { EntireMenu } from './@types/uber-eats';

const axios = require('axios');

export const updateUberEatsMenu = async (entireMenu: EntireMenu) => {
  return axios.put(`https://api.uber.com/v2/eats/stores/${process.env.TEST_EATS_STORE_ID}/menus`, entireMenu, {
    headers: {
      Authorization: `Bearer ${process.env.EATS_STORE_TOKEN}`,
      'Content-Type': ['application/json', 'text/plain'],
    },
  });
};
