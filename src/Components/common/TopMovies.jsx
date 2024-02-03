import { useSelector } from "react-redux";
import Slider from "react-slick";

const TopMovies = () => {
  const trendingmovies = useSelector(store => {
    return store.home.trendingMovies;
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  // console.log(trendingmovies);

  return (
    <>
      <h3>Top Rated</h3>
      <ul >
      <Slider {...settings}>
        {trendingmovies.map((movie) => (
          
          <li>
            <img src={"https://image.tmdb.org/t/p/original"+ movie.poster_path} className="moviesimage"/>
            <h4>{movie.title}</h4>
          </li>
        ))}
        </Slider>
      </ul>
    </>
  );
};

export default TopMovies;
