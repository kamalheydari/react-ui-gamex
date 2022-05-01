import { createGlobalStyle } from "styled-components";
import Screen from "./Screen";

//? fonts
import "@fontsource/audiowide";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";

import "@fontsource/oswald/500.css";
import "@fontsource/oswald/700.css";

const GlobalStyle = createGlobalStyle`
  
  /* RESET */
  *,::after,::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    
  }
  
  input {
    font: inherit;
    outline:none;
    border: none;
  }
  
  html {
    scroll-behavior: smooth;
    font-size:10px;
    ${Screen.sm`
      font-size:12px;
    `}
    ${Screen.md`
      font-size:13px;
    `}
    ${Screen.lg`
      font-size:14px;
    `}
  }
  
  body{
    margin:0;
    font-family: var(--ff-poppins);
  }
  
  :root{
    /* COLORS */
  --raisin-black-1: hsl(234, 14%, 14%);
  --raisin-black-2: hsl(231, 12%, 12%);
  --raisin-black-3: hsl(228, 12%, 17%);
  --eerie-black: hsl(240, 11%, 9%);
  --light-gray: hsl(0, 0%, 80%);
  --platinum: hsl(0, 4%, 91%);
  --xiketic: hsl(275, 24%, 10%);
  --orange: hsl(31, 100%, 51%);
  --orange-2: #ff7300;
  --white: hsl(0, 0%, 100%);
  --gray:  hsla(0, 0%, 100%, 0.1);
  --onyx: hsl(240, 5%, 26%);

  /* TYPOGRAPHY */
  --ff-audiowide: "Audiowide",  sans-serif;
  --ff-oswald: "Oswald", sans-serif;
  --ff-poppins: "Poppins", sans-serif;

  --fs-1: 6rem;
  --fs-2: 5.5rem;
  --fs-3: 5rem;
  --fs-4: 4.5rem;
  --fs-5: 4rem;
  --fs-6: 3rem;
  --fs-7: 3.5rem;
  --fs-8: 3rem;
  --fs-9: 2.5rem;
  --fs-10: 2rem;
  --fs-11: 1.5rem;
  --fs-12: 1rem;
  --fs-13: 0.8rem;
  --fs-14: 0.6rem;

  --fw-400: 400;
  --fw-500: 500;
  --fw-700: 700;

  /* TRANSITION */
  --transition-1: 0.15s ease-in-out;
  --transition-2: 0.15s ease-in;
  --transition-3: 0.25s ease-out;
  --transition-4: 0.5s ease-out;

  /* SPACING */
  --header-height:6rem;

  /* CLIP PATH */
  --polygon-1: polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0);
  --polygon-2: polygon(0 0, 100% 0%, 82% 100%, 0% 100%);
  --polygon-3: polygon(0 0, 100% 0%, 100% 100%, 18% 100%);
  --polygon-4: polygon(96% 0, 100% 36%, 100% 100%, 4% 100%, 0 66%, 0 0);
  --polygon-5: polygon(49% 100%, 90% 20%, 100% 60%, 72% 34%, 33% 34%, 0% 60%, 10% 20%);;
}
`;

export default GlobalStyle;
