function Button({ text, buttonAction }) {
  return (
    <div className='buttonContainer'>
      <button type='button' onClick={buttonAction} className='Button'>
        {text}
      </button>
    </div>
  );
}

export default Button;
