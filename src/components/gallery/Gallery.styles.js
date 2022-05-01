import styled from "styled-components";
import Screen from "../../styles/Screen";
const GalleryStyles = styled.section`
  margin: 4rem 0 1rem;
  max-width: 1500px;
  margin-inline: auto;
  ${Screen.md`
    padding-inline: 2rem;
    `}

  .swiper__slide {
    width: 100%;
    overflow: hidden;
    height: 40vh;
    ${Screen.sm`
    height: 45vh;
    `}
    ${Screen.md`
    height: 50vh;
    border-radius: 1rem; *
    `}
    ${Screen.lg`
    height: 60vh;
    `}
    ${Screen.xl`
    height:65vh;
    `}
  }
  .swiper__img {
    width: 100%;
    height: 100%;
    object-fit: fill;

    ${Screen.lg`
    // object-fit: cover;
    `}
  }
`;
export default GalleryStyles;
