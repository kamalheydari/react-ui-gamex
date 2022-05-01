import TournamentStles from "./Tournament.styles";
import { PrizeImg, Winner1, Winner2 } from "../../assets/images";
import { Typography } from "..";
import { Button, Container } from "..";

const Tournament = () => {
  return (
    <Container>
      <TournamentStles>
        <div className='tournament__info'>
          <Typography.SubTitle>Check out our next</Typography.SubTitle>
          <Typography.H3>
            Gaming
            <br />
            tournaments!
          </Typography.H3>
          <Typography.Text>
            Lpsum dolor sit amet, consectetur adipiscing elit, sed labore et
            dolore magna aliqua.
          </Typography.Text>
          <Button variant='primary' className='info__btn'>
            join whit us
          </Button>
        </div>
        <div className='tournament__prize'>
          <Typography.H3>Prize pool</Typography.H3>
          <div className='prize__conunt'>$8000</div>
          <img src={PrizeImg} alt='PrizeImg' className='prize__img' />
        </div>
        <div className='tournament__winners'>
          <Typography.H3>Last winners</Typography.H3>
          <div className='winners__items'>
            <div className='winners__item'>
              <img src={Winner1} alt='winner - 1' />
              <span>1st place</span>
            </div>
            <div className='winners__item'>
              <img src={Winner2} alt='winner - 2' />
              <span>2nd place</span>
            </div>
          </div>
        </div>
      </TournamentStles>
    </Container>
  );
};

export default Tournament;
