import { getAllContentfulData } from './contentful-transforms';
import { updateUberEatsMenu } from './uber-api';
import { convertToUberEntireMenu, onlyMenus } from './uber-transforms';

const { PROD_EATS_STORE_TOKEN, TEST_EATS_STORE_TOKEN } = process.env;
const TMS_STORE_ID = 'c810eda3-c78d-436f-97d8-784dbcc637f5';
const PRIMO_VEGAN_STORE_ID = '3d5d95e5-f12c-4c46-9511-405241d2dc49';
const TEST_EATS_STORE_ID = '6c537cea-319c-4098-918a-ca83ae13f71a';

const main = async () => {
  try {
    const allContentfulData = await getAllContentfulData();
    const entireUberMenu = convertToUberEntireMenu(allContentfulData);

    const testResult = await updateUberEatsMenu(
      TEST_EATS_STORE_ID,
      TEST_EATS_STORE_TOKEN,
      onlyMenus(entireUberMenu, ['Full menu', 'Vegetarian', 'Vegan', 'Gluten Free #meat']),
    );
    console.log(testResult.status, testResult.statusText);

    const tmsResult = await updateUberEatsMenu(
      TMS_STORE_ID,
      PROD_EATS_STORE_TOKEN,
      onlyMenus(entireUberMenu, ['Full menu', 'Vegetarian', 'Vegan', 'Gluten Free #meat']),
    );
    console.log(tmsResult.status, tmsResult.statusText);

    const primoVeganResult = await updateUberEatsMenu(
      PRIMO_VEGAN_STORE_ID,
      PROD_EATS_STORE_TOKEN,
      onlyMenus(entireUberMenu, ['Vegetarian', 'Vegan']),
    );
    console.log(primoVeganResult.status, primoVeganResult.statusText);
  } catch (e) {
    console.log(e);
  }
};

main();
