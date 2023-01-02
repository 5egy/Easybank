import logo from "../easybank-landing-page-master/images/logo.svg";
import hamburger from "../easybank-landing-page-master/images/icon-hamburger.svg";
import close from "../easybank-landing-page-master/images/icon-close.svg";
import DesktopMenu from "../menu/DesktopMenu";

const Nav = ({ openMenu, toggleMenu}) => {
  return (
    <nav>
      <div id="mobileNav">
        <img src={logo} alt="Easy Logo" id="logo" />
        <img
          id="menu"
          src={openMenu ? close : hamburger}
          onClick={toggleMenu}
          alt="Hamburger"
        />
      </div>

      <DesktopMenu openMenu={openMenu} />
    </nav>
  );
};

export default Nav;
