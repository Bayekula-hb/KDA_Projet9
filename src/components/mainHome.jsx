import React from "react";
// import Image from "../Image/illustraction.jpg";
import SectionAction from "./Home/sectionAction";
import SectionDrama from "./Home/sectionDrama";
import SectionComedy from "./Home/sectionComedy";
import CarouselN from "./newCarousel";

const MainHome = ({ filmList, filmLinkImage }) => {
  return (
    <>
      <CarouselN />
      <main>
        <SectionAction />
        <SectionDrama />
        <SectionComedy />
      </main>
    </>
  );
};
export default MainHome;
