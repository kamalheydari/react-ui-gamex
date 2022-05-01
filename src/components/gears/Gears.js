import { Icons, Button, Container, SectionTitle, Typography } from "..";
import gears from "../../assets/data/gears";
import GearsStyles from "./Gears.styles";

const Gears = () => {
  return (
    <Container>
      <GearsStyles>
        <SectionTitle>check our gears</SectionTitle>
        <div className='gears'>
          {gears.map((item) => (
            <article key={item.id} className='gear'>
              <div className='gear__header'>
                <img src={item.img} alt={item.name} />
                <div className='header__time'>
                  <Icons.ClockStyled />
                  <span>in 4 hours</span>
                </div>
                <div className='header__share'>
                  <Icons.ShareStyled />
                </div>
              </div>
              <div className='gear__content'>
                <div className='content__desc'>
                  <Typography.H4>{item.name}</Typography.H4>
                  <Typography.Text>{item.brand}</Typography.Text>
                </div>
                <Typography.Text className='desc__price'>
                  ${item.price}
                </Typography.Text>
              </div>
              <div className='gear__footrer'>
                <Button variant='primary'>
                  <Icons.CircleWithPlusStyled />
                  add to cart
                </Button>
                <Button variant='icon'>
                  <Icons.HeartStyled />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </GearsStyles>
    </Container>
  );
};

export default Gears;
