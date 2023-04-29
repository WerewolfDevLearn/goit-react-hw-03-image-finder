export interface IImage {
  collections?: number;
  comments?: number;
  downloads?: number;
  id: number;
  imageHeight?: number;
  imageSize?: number;
  imageWidth?: number;
  largeImageURL: string;
  likes?: number;
  pageURL?: string;
  previewHeight?: number;
  previewURL?: string;
  previewWidth?: number;
  tags: string;
  type?: string;
  user?: string;
  userImageURL?: string;
  user_id?: number;
  views?: number;
  webformatHeight?: number;
  webformatURL: string;
  webformatWidth?: number;
}
export interface IState {
  images: IImage[];
  largeImageURL: IgetLargeImage;
  loading: boolean;
  message: string;
  keyword: string;
  page: number;
  lastPage: boolean;
}

export interface IData {
  total: number;
  totalHits: number;
  hits: IImage[];
}
export interface FormPorp {
  onSubmitForm(query: string): void;
}

export interface FormState {
  inputValue: string;
}
export interface ModaLProps {
  onCloseModal(): void;
  children: JSX.Element[] | JSX.Element;
}

export interface IGallery {
  images: IImage[];
  onImageClick(largeImageURL: IgetLargeImage): void;
}
export interface IgetLargeImage {
  url: string | undefined;
  alt: string;
}

export interface IItemImage {
  webformatURL: string;
  alt: string;
  largeImageURL: string;
  id: number;
  onImageClick(largeImageURL: IgetLargeImage): void;
}

export interface IButton {
  text: string;
  buttonAction(): void;
}
