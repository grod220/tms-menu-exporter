import { convertToUberEntireMenu } from './uber-transforms';
import { getAllContentfulData } from './contentful-transforms';
import { updateUberEatsMenu } from './uber-api';

const main = async () => {
  try {
    const allContentfulData = await getAllContentfulData();
    const entireUberMenu = convertToUberEntireMenu(allContentfulData);
    const result = await updateUberEatsMenu(entireUberMenu);
    console.log(result.status, result.statusText);
  } catch (e) {
    console.log(e);
  }
};

main();
