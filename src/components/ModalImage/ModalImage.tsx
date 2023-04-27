interface IModal {
  largeImage: { url: string; alt: string };
}

function ModalImage({ largeImage }: IModal) {
  const { alt, url } = largeImage;
  return <img src={url} alt={alt} />;
}

export default ModalImage;
