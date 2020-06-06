// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';

export interface ICategoryFields {
  /** title */
  title: string;

  /** menu items */
  menuItems?: IDish[] | undefined;
}

export interface ICategory extends Entry<ICategoryFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'category';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IDishFields {
  /** title */
  title?: string | undefined;

  /** price */
  price?: number | undefined;

  /** description */
  description?: string | undefined;

  /** is heated */
  isHeated?: boolean | undefined;

  /** image */
  image?: Asset | undefined;

  /** submit image to uber */
  submitImageToUber?: boolean | undefined;

  /** options */
  options?: IOptions[] | undefined;
}

export interface IDish extends Entry<IDishFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'dish';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IMenuVersionFields {
  /** type */
  type: string;

  /** categories */
  categories?: ICategory[] | undefined;
}

export interface IMenuVersion extends Entry<IMenuVersionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'menuVersion';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IOptionItemFields {
  /** title */
  title?: string | undefined;

  /** price */
  price?: number | undefined;

  /** description */
  description?: string | undefined;
}

export interface IOptionItem extends Entry<IOptionItemFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'optionItem';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IOptionsFields {
  /** title */
  title?: string | undefined;

  /** maximum */
  maximum?: number | undefined;

  /** minimum */
  minimum?: number | undefined;

  /** free option items */
  freeOptionItem?: (IDish | IOptionItem)[] | undefined;

  /** priced option items */
  pricedOptionItems?: (IDish | IOptionItem)[] | undefined;
}

export interface IOptions extends Entry<IOptionsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'options';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE = 'category' | 'dish' | 'menuVersion' | 'optionItem' | 'options';

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
