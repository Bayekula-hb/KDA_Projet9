import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "./Card/card";
import Footer from "./Footer";
import { filmPopularContext } from "../app";

const Movies = () => {
  const linkImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  
  const films = useContext(filmPopularContext);
  
  return (
    <>
      <main className="main-movies">
        <h2>Le plus populaire</h2>
        <div className="container--card">
          {films.map((film) => {
            return (
              <Card
                urlImage={linkImage + film.poster_path}
                urlImageAlt={film.title}
                titlefilm={film.title}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Movies;
