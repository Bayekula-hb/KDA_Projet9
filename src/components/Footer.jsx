import Ul, { Li } from "./Ul";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer">
      <Ul className="list list-menu" contentUl1=
      {
        <Li
          className="Li Li-home"
          contentLi={
            <Link className="link link--home" to="/">
              Terms of use
            </Link>
          }
        />
      }
      contentUl2=
      {
        <Li
          className="Li Li-home"
          contentLi={
            <Link className="link link--movies" to="/movies">
              Contact Us
            </Link>
          }
        />
      }
      contentUl3=
      {
        <Li
          className="Li Li-home"
          contentLi={
            <Link className="link link--movies" to="/movies">
              Privacy
            </Link>
          }
        />
      }
      />
      <h3> © 2021 H-CINE. All Rights Reserved.</h3>
    </footer>
  );
};
export default Footer;
