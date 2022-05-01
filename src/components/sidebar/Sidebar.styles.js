import styled from "styled-components";
import Screen from "../../styles/Screen";

const SidebarStyles = styled.div`
  background-color: var(--raisin-black-2);
  width: min(100%, 430px);
  position: fixed;
  top: 0;
  bottom: 0;
  right: ${(props) => (props.isSidebarOpen ? "0" : "-100%")};
  transition: var(--transition-3);
  z-index: 2;
  ${(props) =>
    props.isSidebarOpen && `box-shadow: 0 3px 27px hsla(0, 0%, 0%, 0.5);`}

  ${Screen.lg`
    display:none
  `}

  .sidebar__header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray);

    img{
      width:8rem;
    }
  }

  .sidebar__nav {
    display: block;
    margin-bottom: 3rem;

    a {
      display: inline-block;
      width: 100%;
      border-bottom: 1px solid var(--gray);
      padding: 1.5rem 0.8rem;
      font-size: var(--fs-12);
      color: var(--platinum);
      font-weight: var(--fw-500);
      transition: var(--transition-2);

      &:hover {
        padding-left: 1rem;
        color: var(--orange);
      }
    }
  }

  .sidebar__social {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
  }

  .sidebar__overlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    transition: var(--transition-2);

    ${(props) =>
      props.isSidebarOpen &&
      `
      background: hsla(0, 0%, 0%, 0.7);
      pointer-events: all;
      transition: var(--transition-3);
  `};
  }
`;

export default SidebarStyles;
