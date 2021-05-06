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

function App() {

  const [listFilm, setListFilm] = useState([]);
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
  
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={MainHome}></Route>
        <filmPopularContext.Provider value={listFilm}>
          <Route path="/movies" component={Movies}></Route>
        </filmPopularContext.Provider>
      </Switch>
      <Footer />
    </>
  );
}

export default App;