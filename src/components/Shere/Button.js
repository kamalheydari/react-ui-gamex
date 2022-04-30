import styled, { css } from "styled-components";

const Button = styled.button`
  color: var(--white);
  font-family: var(--ff-oswald);
  font-size: var(--fs-6);
  font-weight: var(--fw-500);
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  transition: var(--transition-1);
  &:hover {
    color: var(--orange);
  }

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          clip-path: var(--polygon-1);
          padding: 0.7rem 2.5rem;
          background-color: var(--orange);
          &:is(:hover, :focus) {
            background: var(--raisin-black-1);
          }
        `;

      case "secondary":
        return css`
          background-color: var(--orange);
          color: var(--white);
          border-radius: 0.5rem;
          font-size: var(--fs-7);
          &:is(:hover, :focus) {
            color: var(--white);
          }
        `;
        
      case "icon":
        return css`
          background-color: var(--raisin-black-3);
          clip-path: var(--polygon-1);
          color: var(--orange);
          padding: 1rem 1.5rem;

          &:is(:hover, :focus) {
            color: var(--white);
            background-color: var(--orange);
          }
        `;

      default:
        break;
    }
  }};
`;

export default Button;
