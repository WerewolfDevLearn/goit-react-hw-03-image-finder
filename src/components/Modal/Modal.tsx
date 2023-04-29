import { Component } from "react";
import { ModaLProps } from "../interfaces/interfaces";
class Modal extends Component<ModaLProps> {
  componentDidMount() {
    window.addEventListener("keydown", this.pressEscBtn);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.pressEscBtn);
  }

  pressEscBtn = (event: KeyboardEvent) => {
    console.log(event);
    if (event.code === "Escape") {
      this.props.onCloseModal();
    }
  };
  onOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) this.props.onCloseModal();
  };
  render() {
    const { onCloseModal, children } = this.props;

    return (
      <div className='Overlay' onClick={this.onOverlayClick}>
        <div className='Modal'>{children}</div>
      </div>
    );
  }
}

export default Modal;
