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
export const filmDramaContext = React.createContext();
export const filmComdeyContext = React.createContext();

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
      if ((Id === 18 || Id === 12) && Id !== 10749) {
        TabFilmAction.push(film);
      }
    }
    return "";
  });
  const filmAction = TabFilmAction.filter((film, index) => {
    return index < 4;
  });
  const [listFilmDrama, setlistFilmDrama] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/list/30?api_key=b5be08aabb5691e1522a3bd74604d1ee&page=1"
      )
      .then((result) => {
        return result.data.items;
      })
      .then((films) => {
        setlistFilmDrama(films);
      });
  }, []);
  let TabFilmDrama = [];
  listFilmDrama.map((film) => {
    for (const Id of film.genre_ids) {
      if (Id === 18 || (Id === 10749 && Id !== 12 && Id !== 28)) {
        TabFilmDrama.push(film);
      }
    }
    return "";
  });
  const filmDrama = TabFilmDrama.filter((film, index) => {
    return index >= 0 && index < 4;
  });


  const [listFilmComdey, setlistFilmComdey] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/list/20?api_key=b5be08aabb5691e1522a3bd74604d1ee&page=1"
      )
      .then((result) => {
        return result.data.items;
      })
      .then((films) => {
        setlistFilmComdey(films);
      });
  },[]);
  let TabFilmComedy = [];
  listFilmComdey.map((film)=>{
    for (const Id of film.genre_ids) {
      if((Id === 35 || Id===9648) && (Id !== 12 && Id !== 10749) ){
        TabFilmComedy.push(film)
      }
    }
    return "";
  })
  const filmComedy = TabFilmComedy.filter((film, index) => {
    return index < 4;
  });

  return (
    <>
      <Header />
      <Switch>
        <filmPopularContext.Provider value={listFilmPopular}>
          <filmActionContext.Provider value={filmAction}>
            <filmDramaContext.Provider value={filmDrama}>
              <filmComdeyContext.Provider value={filmComedy}>
                <Route exact path="/" component={MainHome}></Route>
              </filmComdeyContext.Provider>
            </filmDramaContext.Provider>
          </filmActionContext.Provider>
          <Route path="/movies" component={Movies}></Route>
        </filmPopularContext.Provider>
      </Switch>
      <Footer />
    </>
  );
}

export default App;