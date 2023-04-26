import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className='ImageGallery'>
      {images.map(image => (
        <li
          key={image.id}
          className='ImageGalleryItem'
          // onClick={showModalOnClick}
        >
          <ImageGalleryItem
            webformatURL={image.webformatURL}
            alt={image.tags}
            largeImageURL={image.largeImageURL}
            id={image.id}
            onImageClick={onImageClick}
            // showModalOnClick={showModalOnClick}
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
