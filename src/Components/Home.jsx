import { useEffect } from "react";
import { fetchData } from "../utils/api";
import { getTrendingMovies,getPopularMovies,getLatestMovies } from "../redux/homeSlice";
import { useDispatch } from "react-redux";
import TopMovies from "./common/TopMovies";
import PopularMovies from "./common/PopularMovies";
import LatestMovies from "./common/LatestMovies";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
      fetchData("/movie/top_rated", {
        language: "en-US",
        page: 1,
      })
      .then((data)=> {
        dispatch(getTrendingMovies(data));
      })
      .catch((err)=> console.log(err));

      fetchData("/movie/popular", {
        language: "en-US",
        page: 1,
      } )
      .then((data)=> {
        dispatch(getPopularMovies(data))
      })
      .catch((err)=> console.log(err))

      fetchData("/movie/now_playing", {
        language: "en-US",
        page: 1,
      })
      .then((data)=>{
        // console.log(data);
        dispatch(getLatestMovies(data))
      })
      .catch((err)=> console.log(err))
    },[]);
     return(
        <>
        <h1>Home App</h1>
        <TopMovies />
        <PopularMovies />
        <LatestMovies />
        </>
     );
}

export default Home;