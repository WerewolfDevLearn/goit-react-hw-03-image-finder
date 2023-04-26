function ModalImage({ largeImage }) {
  const { alt, url } = largeImage;
  return <img src={url} alt={alt} />;
}

export default ModalImage;
