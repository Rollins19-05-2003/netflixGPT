import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularCelebrity from "../hooks/usePopularCelebrity";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularCelebrity();
  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse;
