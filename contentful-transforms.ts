import { ICategory, IDish, IMenuVersion, IOptionItem, IOptions } from './@types/contentful';
const contentful = require('contentful');

const client = contentful.createClient({
  space: '8fhpgddd51q7',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export interface AllContentfulData {
  allMenuVersions: IMenuVersion[];
  allCategories: ICategory[];
  allMenuItems: IDish[];
  allOptions: IOptions[];
  allOptionItems: IOptionItem[];
}

const retrieve = async <ContentfulType>(content_type: string) => {
  return (
    await client.getEntries({
      content_type,
      include: 10,
      limit: 500,
    })
  ).items as ContentfulType[];
};

export const getAllContentfulData = async (): Promise<AllContentfulData> => {
  return {
    allMenuVersions: await retrieve<IMenuVersion>('menuVersion'),
    allCategories: await retrieve<ICategory>('category'),
    allMenuItems: await retrieve<IDish>('dish'),
    allOptions: await retrieve<IOptions>('options'),
    allOptionItems: await retrieve<IOptionItem>('optionItem'),
  };
};
