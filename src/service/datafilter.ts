import { IImage } from "../components/interfaces/interfaces";
export default function datafilter(obj: IImage) {
  const { id, webformatURL, tags, largeImageURL } = obj;
  const filtredData = { id, webformatURL, tags, largeImageURL };
  return filtredData;
}
