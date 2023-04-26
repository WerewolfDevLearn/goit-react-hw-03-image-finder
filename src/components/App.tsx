import { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import ModalImage from "./ModalImage/ModalImage";
import imageApi from "../service/api.js";
import { IState, IData } from "./interfaces/interfaces";

class App extends Component<{}, IState> {
  state = {
    images: [],
    largeImageURL: "",
    loading: false,
    error: null,
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

  saveLargeImage = (largeImageURL: string) => {
    this.setState({ largeImageURL: largeImageURL });
  };

  hideLargeImage = () => {
    this.setState({ largeImageURL: "" });
  };

  isLastPage = (data: IData) => {
    console.log(this.state.images.length);
    console.log(data.totalHits);
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

  fetchImage = () => {
    const { keyword, page } = this.state;
    this.setState({ loading: true });
    imageApi(keyword, page)
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
        }));

        this.isLastPage(data);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { images, loading, error, largeImageURL, lastPage } = this.state;
    return (
      <>
        <SearchBar onSubmitForm={this.onSubmitForm} />
        {images.length > 0 && <ImageGallery images={images} onImageClick={this.saveLargeImage} />}
        {largeImageURL && (
          <Modal onCloseModal={this.hideLargeImage}>
            <ModalImage largeImage={largeImageURL} />
          </Modal>
        )}
        {images.length > 0 && !lastPage && !loading && <Button text='Load more' buttonAction={this.fetchImage} />}
        {loading && <Loader />}
        {error && <p>ERROR</p>}
      </>
    );
  }
}

export default App;
