import styled, { css } from "styled-components";

const baseTitleStyle = css`
  color: var(--white);
  font-weight: var(--fw-400);
  text-transform: uppercase;
  font-family: var(--ff-oswald);
`;

const H1 = styled.h1`
  ${baseTitleStyle}
  font-family: var(--ff-audiowide);
  font-size: var(--fs-1);
  letter-spacing: 5px;
`;

const H2 = styled.h2`
  ${baseTitleStyle}
  letter-spacing: 3px;
  font-size: var(--fs-2);
`;

const H3 = styled.h3`
  ${baseTitleStyle}
  letter-spacing: 2px;
  font-size: var(--fs-3);
`;

const H4 = styled.h4`
  ${baseTitleStyle}
  letter-spacing: 2px;
  font-size: var(--fs-4);
`;

const SubTitle = styled.p`
  color: var(--orange);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-family: var(--ff-oswald);
  font-size: var(--fs-6);
  font-weight: var(--fw-500);
`;

const Text = styled.p`
  letter-spacing: 1px;
  color: var(--platinum);
`;

const Typography = { H1, H3, H2, H4, SubTitle, Text };

export default Typography;
