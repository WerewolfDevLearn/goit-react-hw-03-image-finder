function ImageGalleryItem({ webformatURL, alt, largeImageURL, id, onImageClick }) {
  const getLargeImageURL = e => {
    onImageClick({ url: e.target.dataset.largeimageurl, alt: e.target.alt });
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
