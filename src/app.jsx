import "./sass/main.scss";
import Header from './components/Header';
import { Route, Switch } from 'react-router';
import MainHome from "./components/mainHome";
import Movies from "./components/Movies";

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={MainHome}></Route>
        <Route path="/movies" component={Movies}></Route>
      </Switch>
    </>
  );
}

export default App;
