import { SectionTitle, Icons,Container,Button } from "..";
import TeamStyles from "./Team.styles";
import team from "../../assets/data/team";

const Team = () => {
  return (
    <Container>
      <TeamStyles>
        <SectionTitle>Active Team Members</SectionTitle>
        <ul className='teams'>
          {team.map((item) => (
            <li key={item.id}>
              <img src={item.img} alt='team member' />
              <Icons.LinkStyled className="team__icon" />
            </li>
          ))}
        </ul>
        <Button className='team__btn' variant='primary'>
          view all members
        </Button>
      </TeamStyles>
    </Container>
  );
};

export default Team;
