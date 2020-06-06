import { convertToUberEntireMenu } from './uber-transforms';
import { getAllContentfulData } from './contentful-transforms';

const main = async () => {
  try {
    const allContentfulData = await getAllContentfulData();
    const entireUberMenu = convertToUberEntireMenu(allContentfulData);
    const test = 1;
  } catch (e) {
    console.log(e);
  }
};

main();
