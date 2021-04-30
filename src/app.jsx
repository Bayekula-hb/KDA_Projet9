import "./sass/main.scss";
import Header from './components/Header';
import Section from "./components/section";
import { Switch } from 'react-router';
import Image from "./Image/a_comédie1.png";
import Image2 from "./Image/Black-Panther-poster-main-xl-600x889.jpg";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header/>
      <Section className="section section--action"  
                titleSection="action & adventure"
                ImageCard={Image}
                ImageCard2={Image2}/>
      <Section className="section section--drama"  
                titleSection="drama & Romantic"
                ImageCard={Image}
                ImageCard2={Image2}/>
      <Footer />
      <Switch>
      

      </Switch>
    </>
  );
}

export default App;
