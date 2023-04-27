import { IItemImage } from "../../interfaces/interfaces";
function ImageGalleryItem({ webformatURL, alt, largeImageURL, id, onImageClick }: IItemImage) {
  const getLargeImageURL = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    onImageClick({ url: event.currentTarget.dataset.largeimageurl, alt: event.currentTarget.alt });
  };
  return (
    <img
      src={webformatURL}
      alt={alt}
      className='ImageGalleryItem-image'
      data-largeimageurl={largeImageURL}
      data-id={id}
      onClick={getLargeImageURL}
    />
  );
}

export default ImageGalleryItem;
