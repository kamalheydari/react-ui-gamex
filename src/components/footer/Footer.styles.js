import styled from "styled-components";
import { FooterBg } from "../../assets/images";
import Screen from "../../styles/Screen";

const FooterStyles = styled.footer`
  .footer__content {
    background-image: ${`url(${FooterBg})`};
    background-position: center;
    background-size: cover;
  }

  .content__navbar {
    padding: 9rem 0 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    border-bottom: 3px solid var(--xiketic);

    ${Screen.md`
    justify-content: space-between;
    flex-direction: row;
    `}

    img {
      width: 8rem;
    }

    ul {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
  }

  .content__quicklinks {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem 0;

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .quicklink__list a {
      color: var(--platinum);
      transition: var(--transition-1);
      text-transform: uppercase;
      font-family: var() (--oswald);
      padding: 0.3rem;
      font-weight: var(--fw-500);

      &:is(:hover) {
        color: var(--orange);
      }
    }
  }

  .footer__copyright {
    background: var(--xiketic);
    padding: 2rem 0;
  }

  .copyright__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    ${Screen.md`
    justify-content: space-between;
    flex-direction: row;
    `}

    a {
      color: var(--orange);
      font-family: var(--ff-audiowide);
    }

    img {
      height: 25px;
      width: 300px;
    }
  }
`;
export default FooterStyles;
