import { useEffect, useState } from "react";
import axios from "axios";

const CarouselN = () => {
  const [listFilm, setListFilm] = useState([]);
  const linkImage = "https://image.tmdb.org/t/p/w1280/";
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/list/28?api_key=b5be08aabb5691e1522a3bd74604d1ee&page=1"
      )
      .then((result) => {
        return result.data.items;
      })
      .then((films) => {
        setListFilm(films);
      });
  }, []);
  const topFilm = listFilm.filter((film, index) => {
    return index >0 && index < 4;
  });
  let tabFilm = [];
  topFilm.filter((film) => {
    tabFilm.push(film.backdrop_path);
    return film;
  });
  return (
    <div
      id="carousel_1"
      className="carousel slide carousel--div"
      data-ride="carousel"
    >
      <ul className="carousel-indicators">
        <li data-target="#carousel_1" data-slide-to="0" class="active"></li>
        <li data-target="#carousel_1" data-slide-to="1"></li>
        <li data-target="#carousel_1" data-slide-to="2"></li>
      </ul>
      <div className="carousel-inner " data-interval="2000">
        <div className="carousel-item active">
          <img
            src={linkImage + tabFilm[0]}
            alt="image"
            className="image-carousel"
          />
        </div>
        <div className="carousel-item">
          <img
            src={linkImage + tabFilm[1]}
            alt="Chicago"
            className="image-carousel"
          />
        </div>
        <div className="carousel-item">
          <img
            src={linkImage + tabFilm[2]}
            alt="film "
            className="image-carousel"
          />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carousel_1" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#carousel_1" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
};
export default CarouselN;