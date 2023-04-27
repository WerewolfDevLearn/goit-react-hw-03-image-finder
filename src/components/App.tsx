import { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import ModalImage from "./ModalImage/ModalImage";
import ErrorComp from "./Error/Error";
import imageApi from "../service/api.js";
import { IState, IData, IgetLargeImage } from "./interfaces/interfaces";

class App extends Component<{}, IState> {
  state = {
    images: [],
    largeImageURL: { url: "", alt: "" },
    loading: false,
    error: "",
    keyword: "",
    page: 1,
    lastPage: false,
  };

  componentDidUpdate(prevProps: any, prevState: IState) {
    if (prevState.keyword !== this.state.keyword) {
      this.fetchImage();
    }
    if (this.state.page > 2 && prevState.page !== this.state.page) {
      this.scrollDown();
    }
  }

  onSubmitForm = (query: string) => {
    this.setState({
      keyword: query,
      page: 1,
      images: [],
      lastPage: false,
    });
  };

  saveLargeImage = (largeImageURL: IgetLargeImage) => {
    this.setState({ largeImageURL: largeImageURL });
  };

  hideLargeImage = () => {
    this.setState({ largeImageURL: { url: "", alt: "" } });
  };

  isLastPage = (data: IData) => {
    if (this.state.images.length === data.totalHits) {
      this.setState({ lastPage: true });
    }
  };

  scrollDown() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  fetchImage = async () => {
    try {
      const { keyword, page } = this.state;
      this.setState({ loading: true });
      const data = await imageApi(keyword, page);
      if (!data.total) {
        throw new Error("Sorry. There is no photos on your request.");
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        page: prevState.page + 1,
      }));
      this.isLastPage(data);
    } catch (error: any) {
      this.setState({ error: error.message });
      setTimeout(() => this.setState({ error: "" }), 3000);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { images, loading, error, largeImageURL, lastPage } = this.state;
    return (
      <>
        <SearchBar onSubmitForm={this.onSubmitForm} />
        {images.length > 0 && <ImageGallery images={images} onImageClick={this.saveLargeImage} />}
        {largeImageURL.url && (
          <Modal onCloseModal={this.hideLargeImage}>
            <ModalImage largeImage={largeImageURL} />
          </Modal>
        )}
        {images.length > 0 && !lastPage && !loading && <Button text='Load more' buttonAction={this.fetchImage} />}
        {loading && <Loader />}
        {error && <ErrorComp error={error} />}
      </>
    );
  }
}

export default App;
