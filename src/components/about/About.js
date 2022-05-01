import AboutStyles from "./About.styles";
import { Button, Container, Icons, Typography } from "..";
import {
  AboutImg,
  Character1,
  Character2,
  Character3,
} from "../../assets/images";

const About = () => {
  return (
    <Container>
      <AboutStyles>
        <div className='about__imgs'>
          <img src={AboutImg} alt='about img' className='about__img-main' />
          <img
            src={Character1}
            alt='character-1'
            className='about__img-character character-1'
          />
          <img
            src={Character2}
            alt='character-2'
            className='about__img-character character-2'
          />
          <img
            src={Character3}
            alt='character-3'
            className='about__img-character character-3'
          />
        </div>
        <div className='about__content'>
          <Typography.SubTitle>Find team member</Typography.SubTitle>
          <Typography.H3>
            Experience just for gamers <strong>offer</strong>
          </Typography.H3>
          <Typography.Text className='about__text'>
            Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat,
            eros pede varius nisi, condimentum viverra felis nunc et lorem. In
            auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam
            lobortis.
          </Typography.Text>
          <Button variant='icon' className='about__btn'>
            <Icons.ArrowForwardStyled />
            Will sharpen your brain and focus
          </Button>
        </div>
      </AboutStyles>
    </Container>
  );
};

export default About;
