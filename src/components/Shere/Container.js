import styled from "styled-components";
import Screen from "../../styles/Screen";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;

  ${Screen.sm`
    max-width:540px;
  `}

  ${Screen.md`
    max-width:700px;
  `}

  ${Screen.lg`
    max-width:1000px;
  `}

  ${Screen.xl`
    max-width:1200px;
  `}
`;

export default Container;
