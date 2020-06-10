import { convertToUberEntireMenu, onlyMenus } from './uber-transforms';
import { getAllContentfulData } from './contentful-transforms';
import { updateUberEatsMenu } from './uber-api';

const { TEST_EATS_STORE_ID, EATS_STORE_TOKEN, TMS_STORE_ID, PRIMO_VEGAN_STORE_ID } = process.env;

const main = async () => {
  try {
    const allContentfulData = await getAllContentfulData();
    const entireUberMenu = convertToUberEntireMenu(allContentfulData);

    const tmsResult = await updateUberEatsMenu(
      TMS_STORE_ID,
      EATS_STORE_TOKEN,
      onlyMenus(entireUberMenu, ['Full menu', 'Vegetarian', 'Vegan', 'Gluten Free #meat']),
    );
    console.log(tmsResult.status, tmsResult.statusText);

    const primoVeganResult = await updateUberEatsMenu(
      PRIMO_VEGAN_STORE_ID,
      EATS_STORE_TOKEN,
      onlyMenus(entireUberMenu, ['Vegetarian', 'Vegan']),
    );
    console.log(primoVeganResult.status, primoVeganResult.statusText);
  } catch (e) {
    console.log(e);
  }
};

main();
