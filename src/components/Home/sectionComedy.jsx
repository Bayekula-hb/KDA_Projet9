
import { useState, useEffect } from "react";
import axios from "axios"
import Card from "../Card/card";
import Ul, { Li } from "../Ul";
import { Link } from "react-router-dom";

const SectionComedy = () => {
   const [listFilm, setListFilm] = useState([]);
  const linkImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/list/20?api_key=b5be08aabb5691e1522a3bd74604d1ee&page=1"
      )
      .then((result) => {
        return result.data.items;
      })
      .then((films) => {
        setListFilm(films);
      });
  },[]);
  let TabFilmComedy = [];
  listFilm.map((film)=>{
    for (const Id of film.genre_ids) {
      if(Id === 35 || Id===9648 && Id !== 12 && Id != 10749 ){
        TabFilmComedy.push(film)
      }
    }
  })
  const filmComedy = TabFilmComedy.filter((film, index) => {
    return index < 4;
  });
  return (
    <section className="section section--action">
      <h2 className="h2 h2--titleSection">Comedy & Mystery</h2>
      <div className="div--container--card">
        <Ul
          className="list list-menu"
          contentUl1={
            <Li
              className="Li Li-home"
              contentLi={
                <Link className="link link--home" to="/">
                  {" "}
                  Featured{" "}
                </Link>
              }
            />
          }
          contentUl2={
            <Li
              className="Li Li-home"
              contentLi={
                <Link className="link link--movies" to="/movies">
                  {" "}
                  Comming Soon{" "}
                </Link>
              }
            />
          }
        />
        <div className="container--card">
          {filmComedy.map((film) => {
              return (
                <Card
                  urlImage={linkImage + film.poster_path}
                  urlImageAlt={film.title}
                  titlefilm={film.title}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
};
export default SectionComedy;