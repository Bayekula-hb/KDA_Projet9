
import { useContext } from "react";
import Card from "../Card/card";
import Ul, { Li } from "../Ul";
import { Link } from "react-router-dom";
import {filmComdeyContext} from "../../app";

const SectionComedy = () => {
  const linkImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const filmComedy = useContext(filmComdeyContext)
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