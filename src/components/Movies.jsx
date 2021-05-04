import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/card";

const Movies = () => {
  const [listFilm, setListFilm] = useState([]);
  const linkImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b5be08aabb5691e1522a3bd74604d1ee&language=en-US&page=1"
      )
      .then((result) => {
        return result.data.results;
      })
      .then((films) => {
        setListFilm(films);
      });
  },[]);
  return (
    <main className="main-movies">
      <h2>All Movies</h2>
      <div className="container--card">
      {listFilm.map((film)=>{
          return <Card urlImage={linkImage+film.poster_path} 
          urlImageAlt={film.title}  titlefilm={film.title}/>
        })}
      </div>
    </main>
  );
};
export default Movies;
