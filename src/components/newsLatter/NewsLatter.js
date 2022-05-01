import NewsLatterStyles from "./NewsLatter.styles";
import { Typography, Container, Button } from "..";
import { NewsletterImg } from "../../assets/images";

const Newslatter = () => {
  return (
    <Container>
      <NewsLatterStyles>
        <div className='newslatter__content'>
          <img src={NewsletterImg} alt='newsletter - img' />
          <Typography.H2>Subscribe to our newsletter </Typography.H2>
        </div>
        <form className='newsletter__form'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Your Email Address'
          />
          <Button variant='primary'>Subscribe</Button>
        </form>
      </NewsLatterStyles>
    </Container>
  );
};

export default Newslatter;
