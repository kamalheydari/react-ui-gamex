import styled from "styled-components";
import { GearsBg } from "../../assets/images";
import Screen from "../../styles/Screen";

const GearsStyles = styled.section`
  padding: 4rem 0rem;
  min-height: calc(100vh - var(--header-height));

  .gears {
    display: grid;
    gap: 3rem;
    justify-items: center;

    ${Screen.lg`
    grid-template-columns: 1fr 1fr;
    `}

    ${Screen.xl`
    grid-template-columns: 1fr 1fr 1fr;
    `}
  }

  .gear {
    width: min(100%, 470px);
  }

  .gear__header {
    position: relative;
    background-image: ${`url(${GearsBg})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    aspect-ratio: 2 / 1.7;
    display: grid;
    place-items: center;
    margin-bottom: 2rem;

    .header__time {
      position: absolute;
      right: 0.8rem;
      top: 0.3rem;
      color: var(--platinum);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-transform: uppercase;

      ${Screen.xl`
      top: 0.2rem;
      `}

      svg {
        width: 2rem;
      }

    span {
      padding: 0.5rem;
      font-size: var(--fs-12);
      
      @media (min-width:370px){
        font-size: var(--fs-11);
      }

      ${Screen.lg`
      font-size: var(--fs-12);
      `}

      ${Screen.xl`
      font-size:var(--fs-13);
      `}
      }
    }

    .header__share {
      position: absolute;
      right: 15px;
      top: 70px;
    }

    img {
      width: 45%;
      margin-inline: auto;
    }
  }

  .gear__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .desc__price {
      font-size: var(--fs-9);
      font-weight: var(--fw-700);
    }
  }

  .gear__footrer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default GearsStyles;
