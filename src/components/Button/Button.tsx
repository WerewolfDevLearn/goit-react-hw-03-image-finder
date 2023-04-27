import { IButton } from "../interfaces/interfaces";
function Button({ text, buttonAction }: IButton) {
  return (
    <div className='buttonContainer'>
      <button type='button' onClick={buttonAction} className='Button'>
        {text}
      </button>
    </div>
  );
}

export default Button;
