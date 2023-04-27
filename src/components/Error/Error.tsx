interface IErrorComp {
  error: string;
}

export default function ErrorComp({ error }: IErrorComp) {
  return (
    <>
      <p className='errorMessage'>{error}</p>
    </>
  );
}
