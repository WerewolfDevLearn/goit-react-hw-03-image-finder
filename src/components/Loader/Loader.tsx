import { FallingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className='loaderContainer'>
      <FallingLines color='#3f51b5' width='100' visible={true} />
    </div>
  );
}
