import { useState, useEffect } from "react";
import axios from "axios";
// import Img1 from "../Image/a_comedie1.png";
// import Img2 from "../Image/illustraction.jpg";
// import Img3 from "../Image/Black-Panther-poster-main-xl-600x889.jpg";

const Carousel = () => {
  const [listFilm, setListFilm] = useState([]);
  const linkImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=b5be08aabb5691e1522a3bd74604d1ee&language=en-US&page=1"
      )
      .then((result) => {
        return result.data.results;
      })
      .then((films) => {
        setListFilm(films);
      });
  }, []);
  const topFilm = listFilm.filter((film, index) => {
    return index < 3;
  });
  console.log("top film : ", topFilm);
  return (
      <div className="carousel section--home">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
          <div class="carousel-item">
            <img src={Img1} alt="Film"  />
          </div>
          <div class="carousel-item">
            <img src={Img2} alt="Film"  />
          </div>
          <div class="carousel-item">
            <img src={Img3} alt="Film" />
          </div>
          {/* {topFilm.map((film) => {
            return (
              <div class="carousel-item">
                <img src={linkImage + film.backdrop_path} alt={film.title} />
              </div>
            );
          })} */}
        </div>
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
  );
};
export default Carousel;