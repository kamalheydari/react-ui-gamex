import styled from "styled-components";
import Screen from "../../styles/Screen";

const NavbarStyles = styled.div`
  background: var(--raisin-black-3);
  box-shadow: 0 3px 27px hsla(0, 0%, 0%, 0.5);
  
  ${Screen.lg`
    position:relative;
    
    &::after,
    &::before {
        content: "";
        position: absolute;
        width: 13rem;
        height: 1.5rem;
        background: var(--raisin-black-3);
        bottom: -20px;
    }

    &::before {
        left: 0;
        clip-path: var(--polygon-2);
    }

    &::after {
        right: 0;
        clip-path: var(--polygon-3);
    }
    `}

  .content {
    height: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar__button {
    ${Screen.lg`
    display: none;
    `}
  }
  .navbar__nav,
  .navbar__actions {
    display: none;
    ${Screen.lg`
    display: flex;
    gap:0.8rem
    `}
  }
  .navbar__actions {
    gap: 1rem;
    align-items: center;

    .action__search {
      padding: 0.4rem;
      border-right: 0.3rem solid var(--eerie-black);
    }

    .action__login {
      background-color: var(--raisin-black-2);
      padding: 0.3rem 0.8rem;
      border-right: 0.3rem solid var(--orange);
      &:hover span {
        color: var(--orange);
      }
      &:hover svg {
        fill: var(--orange);
      }
      span {
        color: var(--light-gray);
        margin-left: 0.5rem;
        transition: var(--transition-1);
        font-family: var(--ff-oswald);
        font-weight: var(--fw-500);
      }
    }
  }

  .navbar__nav {
    gap: 0;
    a {
      position: relative;
      color: var(--platinum);
      padding-block: 34px;
      border: none;
      font-family: var(--ff-oswald);
      text-transform: uppercase;
      letter-spacing: 1px;
      z-index: 1;
      padding: 2.1rem 1rem;

      ${Screen.xl`
        font-size:var(--fs-7);
        padding: 1.9rem 1rem;
      `}

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        transform: skew(-15deg);
        border-bottom: 5px solid transparent;
        z-index: -1;
        transition: var(--transition-2);
      }

      &:is(:hover, :focus)::after {
        background-color: var(--raisin-black-1);
        border-color: var(--orange);
        transition: var(--transition-4);
      }
    }
  }
`;

export default NavbarStyles;
