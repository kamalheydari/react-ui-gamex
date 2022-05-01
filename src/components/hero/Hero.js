import HeroStyles from "./Hero.styles";
import { Typography, Button, Icons } from "..";

const Hero = () => {
  return (
    <HeroStyles>
      <Typography.Text>The Season 8</Typography.Text>
      <Typography.H1>STEAM</Typography.H1>
      <div className='hero__btns'>
        <Button>dream making</Button>
        <Button variant='primary'>
          <Icons.PlayCircleFilledStyled />
          watch live
        </Button>
      </div>
    </HeroStyles>
  );
};

export default Hero;
