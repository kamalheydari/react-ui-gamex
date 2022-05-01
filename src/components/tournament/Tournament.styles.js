import styled from "styled-components";
import Screen from "../../styles/Screen";
const TournamentStles = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;
  padding-bottom: 6rem;

  ${Screen.lg`
  align-items: stretch;
  flex-direction: row;
  `}

  .info__btn {
    margin: 1.5rem auto 0;
    ${Screen.lg`
    margin: 1.5rem 0 0;
  `}
  }

  .tournament__info {
    ${Screen.lg`
    text-align: left;
  `}
  }

  .tournament__winners {
    background-color: var(--raisin-black-1);
    border-radius: 0.5rem;
    width: 100%;
  }

  .prize__conunt {
    background-color: var(--orange);
    color: var(--white);
    border-radius: 50px;
    width: max-content;
    margin: 0 auto 1rem;
    padding: 0.5rem 1.5rem;
  }

  .winners__items {
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  span {
    display: block;
    background-color: var(--orange);
    color: var(--white);
    margin-top: 0.5rem;
    border-radius: 0.3rem;
    padding: 0.3rem 0.5rem;
  }
`;

export default TournamentStles;
