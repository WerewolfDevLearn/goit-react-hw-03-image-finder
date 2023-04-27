import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import { IGallery } from "../interfaces/interfaces";
function ImageGallery({ images, onImageClick }: IGallery) {
  return (
    <ul className='ImageGallery'>
      {images.map(image => (
        <li key={image.id} className='ImageGalleryItem'>
          <ImageGalleryItem
            webformatURL={image.webformatURL}
            alt={image.tags}
            largeImageURL={image.largeImageURL}
            id={image.id}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
