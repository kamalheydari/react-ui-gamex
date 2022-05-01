import styled from "styled-components";

import { HeroBanner } from "../../assets/images";

const HeroStyles = styled.section`
  background-image: ${`URL(${HeroBanner})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-color: #00000098;
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 3rem;
  margin-top: 6rem;

  p {
    color: var(--white);
    font-family: var(--ff-oswald);
    font-size: var(--fs-11);
    font-weight: var(--fw-500);
    text-transform: uppercase;
    letter-spacing: 12px;
    text-shadow: 0 7px hsla(0, 0%, 0%, 0.4);
  }

  .hero__btns {
    display: flex;
    align-items: center;
  }
`;
export default HeroStyles;
