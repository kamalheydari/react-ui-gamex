import styled from "styled-components";

import { SectionWrapperImg } from "../../assets/images";

const SectionWrapper = styled.div`
  background-image: ${`url(${SectionWrapperImg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export default SectionWrapper;
