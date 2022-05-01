import styled from "styled-components";
import Screen from "../../styles/Screen";
import { AboutImgShadow } from "../../assets/images";

const AboutStyles = styled.section`
  padding: 6rem 0;
  gap: 3rem;
  min-height: calc(100vh - var(--header-height));
  
  ${Screen.lg`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 100px;
  padding-right: 110px;
  align-items: center;
  `}

  .about__img-character {
    display: none;

    ${Screen.md`
    display: block;
    position: absolute;
    z-index: -1;
  `}
  }

  .about__img-main {
    width: 100%;
    margin-bottom: 3rem;

    ${Screen.lg`
    margin-bottom: 0;
    `}
  }

  .about__imgs {
    background-image: ${`url(${AboutImgShadow})`};
    background-size: 100%;
    background-position: center;
    margin-inline: 1rem;

    ${Screen.sm`
    max-width: 410px;
    position: relative;
    margin-inline: auto;
    z-index: 1;
    `}

    ${Screen.md`
    max-width: 430px;
    `}

    ${Screen.xxl`
    width: 730px;
    `}
  }
  .character-2 {
    ${Screen.sm`
    display: block;
    position: absolute;
    top: 120px;
    left: 160px;
    max-width: 150px;
    z-index: -1;
    `}

    ${Screen.sm`
    left: 200px;
    `}

    ${Screen.lg`
    top: 100px;
    left: 120px;
    `}

   ${Screen.xl`
    left: 150px;
    `}

   ${Screen.xxl`
    left: 190px;
    `}
  }
  .character-1 {
    ${Screen.sm`
    width: 130px;
    top: 110px;
    left: -120px;
    `}
  }

  .character-3 {
    ${Screen.sm`
    top: -20px;
    right: -112px;
    `}

    ${Screen.lg`
    top: -50px;
    right: -80px;
    width: 100px;
    `}

    ${Screen.xl`
    top: -80px;
    right: -110px;
    width: 160px;
    `}
  }

  .about__content {
    background: var(--raisin-black-1);
    box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.2);
    color: #fff;
    padding: 2rem 1rem;
    border-radius: 0.3rem;

    ${Screen.lg`
    padding: 1rem 1rem;
     width: min(100%, 700px); 
  `}

    ${Screen.xxl`
    padding: 2rem 1rem;
    `}
  }

  strong {
    color: var(--orange);
  }
  
  .about__text {
    margin-block: 1rem;
  }
  .about__btn{
    padding:0.3rem 0.8rem ;
  }
`;

export default AboutStyles;
