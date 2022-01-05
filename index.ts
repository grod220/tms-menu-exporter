import dotenv from 'dotenv';

const env = dotenv.config();
if (env.error) throw env.error;

import { setProdUberToken } from './load-env';
import { main } from './main';

(async () => {
  await setProdUberToken();
  await main();
})();
