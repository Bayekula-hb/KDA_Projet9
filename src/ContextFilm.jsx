import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";


export const filmContextPopular = React.createContext();
export const filmContext = React.createContext();

const ContextFilm = ()=>{
  const [filmPopular, setFilmPopular] = useState([]);
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
        setFilmPopular(films);
      });
  }, []);
  
    return(
        <>
          <filmContextPopular.Provider value={filmPopular}/>
        </>
    )
}
export default ContextFilm;