import { createContext, useState } from "react";
import Header from "./my-folder/header/Header";
import Section from "./my-folder/sections/MainSection";
import Footer from "./my-folder/footer/Footer";
import MobileMenu from "./my-folder/menu/MobileMenu";
import "./my-folder/style/App.scss";
//import Bounce from "react-reveal/Zoom";  "react-reveal": "^1.2."

export const scrollElem = createContext();

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [element, setElement] = useState("");

  function scrollValue(elem) {
    setElement( elem);

    setTimeout(() => {
      setElement("nothing");
    }, 200);
  }

  function toggleMenu() {
    setOpenMenu((curr) => {
      return !curr;
    });
  }

  return (
    <div id="container">
      <scrollElem.Provider value={scrollValue}>
        <Header openMenu={openMenu} toggleMenu={toggleMenu} element={element}/>

        <MobileMenu openMenu={openMenu} element={element} />
      </scrollElem.Provider>
      <Section element={element} />

      {/* <Bounce> */}
        <Footer element={element}/>
      {/* </Bounce> */}

    </div>
  );
};

export default App;
