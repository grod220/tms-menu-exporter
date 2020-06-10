import { convertToUberEntireMenu, onlyMenus } from './uber-transforms';
import { getAllContentfulData } from './contentful-transforms';
import { updateUberEatsMenu } from './uber-api';

const { TEST_EATS_STORE_ID, EATS_STORE_TOKEN } = process.env;

const main = async () => {
  try {
    const allContentfulData = await getAllContentfulData();
    const entireUberMenu = convertToUberEntireMenu(allContentfulData);
    const testStoreUpdateResult = await updateUberEatsMenu(
      TEST_EATS_STORE_ID,
      EATS_STORE_TOKEN,
      onlyMenus(entireUberMenu, ['Full menu', 'Vegetarian', 'Vegan', 'Gluten Free #meat']),
    );
    console.log(testStoreUpdateResult.status, testStoreUpdateResult.statusText);
  } catch (e) {
    console.log(e);
  }
};

main();
