import { EntireMenu } from './@types/uber-eats';

const axios = require('axios');

export const updateUberEatsMenu = async (storeId: string, token: string, entireMenu: EntireMenu) => {
  return axios.put(`https://api.uber.com/v2/eats/stores/${storeId}/menus`, entireMenu, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': ['application/json', 'text/plain'],
    },
  });
};
