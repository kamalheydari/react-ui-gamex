import styled from "styled-components";
import { GearsBg } from "../../assets/images";
import Screen from "../../styles/Screen";

const GearsStyles = styled.section`
  padding: 4rem 0.8rem;

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
    width: min(100%, 450px);
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
      right: 20px;
      top: 12px;
      color: var(--platinum);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-transform: uppercase;

      ${Screen.xl`
      font-size:var(--fs-11);
      top: 8px;
      svg{
        width:25px;
      }
    `}
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
      font-size: var(--fs-5);
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
