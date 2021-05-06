import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./sass/main.scss";
import Header from "./components/Header";
import { Route, Switch } from "react-router";
import MainHome from "./components/mainHome";
import Movies from "./components/Movies";
import Footer from "./components/Footer";

export const filmPopularContext = React.createContext();
export const filmActionContext = React.createContext();

function App() {
  const [listFilmPopular, setListFilm] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b5be08aabb5691e1522a3bd74604d1ee&language=en-US&page=1"
      )
      .then((requetefilm) => {
        return requetefilm.data.results;
      })
      .then((films) => {
        setListFilm(films);
      });
  }, []);

  const [listFilmAction, setlistFilmAction] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/list/28?api_key=b5be08aabb5691e1522a3bd74604d1ee&page=1"
      )
      .then((result) => {
        return result.data.items;
      })
      .then((films) => {
        setlistFilmAction(films);
      });
  }, []);
  let TabFilmAction = [];
  listFilmAction.map((film, index) => {
    for (const Id of film.genre_ids) {
      if ((Id === 18 || Id === 12) && Id != 10749) {
        TabFilmAction.push(film);
      }
    }
  });
  const filmAction = TabFilmAction.filter((film, index) => {
    return index < 4;
  });

  return (
    <>
      <Header />
      <Switch>
        <filmPopularContext.Provider value={listFilmPopular}>
          <filmActionContext.Provider value={filmAction}>
            <Route exact path="/" component={MainHome}></Route>{" "}
          </filmActionContext.Provider>
          <Route path="/movies" component={Movies}></Route>
        </filmPopularContext.Provider>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
