import styled from "styled-components";
import { NewsletterBg } from "../../assets/images";
import Screen from "../../styles/Screen";

const NewslatterStyles = styled.section`
  background-image: ${`url(${NewsletterBg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  margin: 0 0 10rem;
  border-radius: 0.8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${Screen.lg`
   flex-direction: row;
   `}

  .newslatter__content {
    flex: 1;

    ${Screen.md`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-inline: auto;
    width:80%;
    `}
  }

  .newsletter__form {
    flex: 1;
    margin-block: auto;

    input {
      border: 1px solid var(--white);
      background-color: #0000004b;
      color: var(--white);
      padding: 1rem;
      margin-bottom: 1.2rem;
      font-size: var(--fs-11);
      transition: var(--transition-2);
      width: 90%;

      &::placeholder {
        color: var(--white);
      }
      &:focus {
        background-color: #00000074;
      }
    }

    button {
      margin-inline: auto;
      background-color: var(--white);
      color: var(--orange);

      &:hover {
        background: var(--raisin-black-1);
      }
    }
  }
`;

export default NewslatterStyles;
