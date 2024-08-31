import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer"
import { YT_URL } from "../utils/constants";

const VideoTrailer = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);  
  return (
    <div className="w-screen">
        <iframe
        className="w-screen aspect-video"
        src={YT_URL + trailerVideo?.key + "?autoplay=1&mute=1"} 
        title="YouTube video player" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin">
        </iframe>
    </div>
  )
}

export default VideoTrailer
