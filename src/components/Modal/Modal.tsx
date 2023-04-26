import { Component, KeyboardEvent } from "react";
import { ModaLProps } from "../interfaces/interfaces";
class Modal extends Component<ModaLProps> {
  componentDidMount() {
    window.addEventListener("keydown", this.pressEscBtn);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.pressEscBtn);
    this.props.onCloseModal();
  }

  pressEscBtn = e => {
    if (e.code === "Escape") {
      this.props.onCloseModal();
    }
  };

  render() {
    const { onCloseModal, children } = this.props;

    return (
      <div className='Overlay' onClick={onCloseModal}>
        <div className='Modal'>{children}</div>
      </div>
    );
  }
}

export default Modal;
