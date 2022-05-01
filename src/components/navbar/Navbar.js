import { Logo } from "../../assets/images";
import { NavItems, Icons, Container } from "..";
import NavbarStyles from "./Navbar.styles";

const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <NavbarStyles>
      <Container>
        <div className='content'>
            <img src={Logo} alt='logo GameX'  className='navbar__logo' />
          <NavItems className='navbar__nav' />
          <div className='navbar__actions'>
            <div className='action__search'>
              <Icons.SearchStyled />
            </div>
            <div className='action__login'>
              <Icons.LoginStyled />
              <span>Log - In</span>
            </div>
          </div>
          <button
            type='button'
            className='navbar__button'
            onClick={() => setIsSidebarOpen(true)}
          >
            <Icons.MenuOpenStyled />
          </button>
        </div>
      </Container>
    </NavbarStyles>
  );
};

export default Navbar;
