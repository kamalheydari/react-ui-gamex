import { Typography } from "..";

import styled from "styled-components";

const SectionTitle = ({ children }) => {
  return (
    <SectionTitleStyle>
      <Typography.H2>{children}</Typography.H2>
      <div />
    </SectionTitleStyle>
  );
};

const SectionTitleStyle = styled.div`
  text-align: center;

  div {
    background-color: var(--orange);
    clip-path: var(--polygon-5);
    margin: 0 auto 5rem;
    width: min(100%, 450px);
    height: 3.5rem;
  }
`;

export default SectionTitle;
