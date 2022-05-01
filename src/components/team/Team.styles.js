import styled from "styled-components";

const TeamStyles = styled.section`
  padding: 6rem 0;
  min-height: calc(100vh - var(--header-height));

  .team__btn {
    margin: 3rem auto;
  }

  .teams {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 3rem;
    justify-content: center;

    li {
      border: 0.3rem solid transparent;
      border-radius: 50%;
      transition: var(--transition-2);
      position: relative;
      cursor: pointer;
      &:is(:hover, :focus) {
        border-color: var(--orange);
      }

      &:is(:hover, :focus) img {
        opacity: 0.5;
      }

      &:is(:hover, :focus) .team__icon {
        visibility: visible;
        opacity: 1;
      }

      img {
        width: 100%;
        height: 100%;
        transition: var(--transition-2);
      }

      .team__icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: var(--transition-2);
        visibility: hidden;
        opacity: 0;
      }
    }
  }
`;

export default TeamStyles;
