import LoadingImg from "./spinning-circles.svg";
import "./Loading.css"

function Loading() {
  return (
      <div className="Loading-Container">
        <img className='Loading' src={LoadingImg} alt='Loading...' />
      </div>
  );
}

export default Loading;