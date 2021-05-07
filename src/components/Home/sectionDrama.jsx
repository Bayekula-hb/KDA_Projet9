
import { useContext } from "react";
import Card from "../Card/card";
import Ul, { Li } from "../Ul";
import { Link } from "react-router-dom";
import {filmDramaContext} from "../../app";

const SectionDrama = () => {

  const filmDrama = useContext(filmDramaContext);
  const linkImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  

  return (
    <section className="section section--drama">
      <h2 className="h2 h2--titleSection">Drama & Romance </h2>
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
          {filmDrama.map((film) => {
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
export default SectionDrama;