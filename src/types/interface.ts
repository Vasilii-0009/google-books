export interface IBookItem {
  volumeInfo: {
    categories: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    title: string;
    authors: string[];
    description: string;
  };
}
export interface IBookItemFull extends IBookItem {
  id: string;
}

export interface IBooksInfo {
  isAllBooks?: IBookItemFull[];
  isBooksCount?: number;
  isPreloaderTwo?: boolean;
  handleClickBook?: (id: string) => void;
  handleShowMoreBooks?: (count: number) => void;
}

export interface IOneBookInfo {
  isInfoBook?: IBookItem;
}

export interface ISubmitForm {
  handleClickBtnSearch?: (value: string[]) => void;
}
