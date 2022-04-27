import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
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
  --white: hsl(0, 0%, 100%);
  --onyx: hsl(240, 5%, 26%);

  /* TYPOGRAPHY */
  --ff-audiowide: "Audiowide",  sans-serif;
  --ff-oswald: "Oswald", sans-serif;
  --ff-poppins: "Poppins", sans-serif;

  --fs-1: 54px;
  --fs-2: 34px;
  --fs-3: 30px;
  --fs-4: 26px;
  --fs-5: 22px;
  --fs-6: 20px;
  --fs-7: 18px;
  --fs-8: 15px;
  --fs-9: 14px;
  --fs-10: 13px;
  --fs-11: 12px;

  --fw-400: 400;
  --fw-500: 500;
  --fw-700: 700;

  /* TRANSITION */
  --transition-1: 0.15s ease-in-out;
  --transition-2: 0.15s ease-in;
  --transition-3: 0.25s ease-out;

  /* SPACING */
  --section-padding: 60px;

  /* CLIP PATH */
  --polygon-1: polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0);
  --polygon-2: polygon(0 0, 100% 0%, 82% 100%, 0% 100%);
  --polygon-3: polygon(0 0, 100% 0%, 100% 100%, 18% 100%);
  --polygon-4: polygon(96% 0, 100% 36%, 100% 100%, 4% 100%, 0 66%, 0 0);
}

/* RESET */
*,::afer,::before{
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
  width: 100%;
  border: none;
}

html {
  font-family: var(--ff-poppins);
  scroll-behavior: smooth;
}
`;

export default GlobalStyle;
