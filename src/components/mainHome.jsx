import React from "react";
import Image from "../Image/illustraction.jpg";
import SectionAction from "./Home/sectionAction";
import SectionDrama from "./Home/sectionDrama";
import SectionComedy from "./Home/sectionComedy";
import Footer from "./Footer";

const MainHome = ({ filmList, filmLinkImage }) => {
  return (
    <>
      <section className="section--home">
        <img src={Image} alt="img-film" className="section--home" />
      </section>
      <main>
        <SectionAction />
        <SectionDrama />
        <SectionComedy />
      </main>
      <Footer />
    </>
  );
};
export default MainHome;
