const axios = require('axios');

interface UberTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

export const setProdUberToken = async () => {
  const payload = {
    client_id: process.env.UBER_API_CLIENT_ID,
    client_secret: process.env.UBER_API_CLIENT_SECRET,
    grant_type: 'client_credentials',
    scope: 'eats.store',
  };

  const encodedPayload = Object.entries(payload)
    .map(([key, val]) => `${key}=${val}`)
    .join('&');

  const res: { data: UberTokenResponse } = await axios.post('https://login.uber.com/oauth/v2/token', encodedPayload, {
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  });

  process.env.PROD_EATS_STORE_TOKEN = res.data.access_token;
};
