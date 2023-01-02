import React from "react";
import SectionWhy from "./SectionWhy";
import SectionLatest from "./SectionLatest";
// import Zoom from "react-reveal/Zoom";

const MainSection = ({element}) => {

  return (
    <>
      {/* <Zoom> */}
        <SectionWhy element={element} />
        <SectionLatest element={ element }/>
      {/* </Zoom> */}
    </>
  );
};

export default MainSection;
