import Card from "./Card/card";
import Ul, { Li } from "./Ul";
import { Link } from "react-router-dom";

const Section = (props) => {
  return (
    <section className={props.className}>
      <h2 className="h2 h2--titleSection">{props.titleSection}</h2>
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
          <Card
            className="card card--film"
            classNameImg="img img--film"
            classNameH3="H3 h3--tilte"
            urlImage={props.ImageCard}
            urlImageAlt="Image Image"
            titlefilm={props.titleFilm}
          />
          <Card
            className="card card--film"
            classNameImg="img img--film"
            classNameH3="H3 h3--tilte"
            urlImage={props.ImageCard2}
            AurlImagelt="Image Image"
            titlefilm="LLL skssk kks s"
          />
          <Card
            className="card card--film"
            classNameImg="img img--film"
            classNameH3="H3 h3--tilte"
            Image={props.ImageCard2}
            Alt="Image Image"
            contenuH3="LLL skssk kks s"
          />
        </div>
      </div>
    </section>
  );
};
export default Section;
