import { Logo } from "../../assets/images";
import { Icons, NavItems } from "..";
import SidebarStyles from "./Sidebar.styles";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <SidebarStyles isSidebarOpen={isSidebarOpen}>
      <div
        className='sidebar__overlay'
        onClick={() => setIsSidebarOpen(false)}
      />
      <div className='sidebar__header'>
        <img src={Logo} alt='Game - x logo' />
        <Icons.MenuCloseStyled onClick={() => setIsSidebarOpen(false)} />
      </div>
      <NavItems className='sidebar__nav' />
      <div className='sidebar__social'>
        <Icons.TwitterStyled /> <Icons.InstagramStyled /> <Icons.GithubStyled />
        <Icons.LinkedinStyled />
      </div>
    </SidebarStyles>
  );
};

export default Sidebar;
