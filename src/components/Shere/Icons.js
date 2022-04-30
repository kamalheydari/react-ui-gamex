import styled, { css } from "styled-components";

//? icos
import { MenuOpen, Search } from "@styled-icons/material-outlined";
import {
  Close,
  PlayCircleFilled,
  ArrowForward,
} from "@styled-icons/material-rounded";
import {
  Login,
  Link,
  CircleWithPlus,
  Clock,
  Share,
  Heart,
} from "@styled-icons/entypo";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Discord,
  Twitch,
  Xbox,
  Youtube,
} from "@styled-icons/fa-brands";

//? base styles
const bigIcon = css`
  width: 60px;
  color: var(--orange);
  transition: var(--transition-1);
  cursor: pointer;
  &:is(:hover) {
    fill: var(--orange-2);
  }
`;

const normalIcon = css`
  width: 30px;
  height: 30px;
  fill: var(--white);
`;

const smallIcon = css`
  width: 25px;
  height: 25px;
  fill: var(--white);
  color: var(--white);

  transition: var(--transition-1);
  &:is(:hover) {
    fill: var(--orange);
    color: var(--orange);
  }
`;

const circle = css`
  border: 1px solid var(--platinum);
  padding: 0.4rem;
  border-radius: 50%;
  &:is(:hover) {
    border: 1px solid var(--orange);
  }
`;

//? styled icons
const DiscordStyled = styled(Discord)`
  ${smallIcon}
  ${circle}
`;
const TwitchStyled = styled(Twitch)`
  ${smallIcon}
  ${circle}
`;
const XboxStyled = styled(Xbox)`
  ${smallIcon}
  ${circle}
`;
const YoutubeStyled = styled(Youtube)`
  ${smallIcon}
  ${circle}
`;
const LinkStyled = styled(Link)`
  ${normalIcon}
`;
const ClockStyled = styled(Clock)`
  ${normalIcon}
`;
const HeartStyled = styled(Heart)`
  ${normalIcon}
`;
const ShareStyled = styled(Share)`
  ${smallIcon}
  fill: var(--orange);
  border: 1px solid var(--onyx);
  border-radius: 50%;
  padding: 0.3rem;
  &:is(:hover) {
    border: 1px solid var(--white);
    fill: var(--white);
  }
`;
const CircleWithPlusStyled = styled(CircleWithPlus)`
  ${normalIcon}
  fill: var(--white);
`;
const MenuOpenStyled = styled(MenuOpen)`
  ${bigIcon}
`;
const MenuCloseStyled = styled(Close)`
  ${bigIcon}
`;
const PlayCircleFilledStyled = styled(PlayCircleFilled)`
  ${normalIcon}
`;
const SearchStyled = styled(Search)`
  ${smallIcon}
`;
const LoginStyled = styled(Login)`
  ${smallIcon}
`;
const ArrowForwardStyled = styled(ArrowForward)`
  ${smallIcon}
  &:is(:hover) {
    fill: var(--white);
  }
`;
const TwitterStyled = styled(Twitter)`
  ${normalIcon}
  color: var(--orange);
  cursor: pointer;
  &:is(:hover) {
    color: var(--orange-2);
  }
`;
const InstagramStyled = styled(Instagram)`
  ${normalIcon}
  color: var(--orange);
  cursor: pointer;
  &:is(:hover) {
    color: var(--orange-2);
  }
`;
const GithubStyled = styled(Github)`
  ${normalIcon}
  color: var(--orange);
  cursor: pointer;
  &:is(:hover) {
    color: var(--orange-2);
  }
`;
const LinkedinStyled = styled(Linkedin)`
  ${normalIcon}
  color: var(--orange);
  cursor: pointer;
  &:is(:hover) {
    color: var(--orange-2);
  }
`;

const Icons = {
  MenuOpenStyled,
  SearchStyled,
  LoginStyled,
  MenuCloseStyled,
  TwitterStyled,
  InstagramStyled,
  GithubStyled,
  LinkedinStyled,
  PlayCircleFilledStyled,
  ArrowForwardStyled,
  LinkStyled,
  CircleWithPlusStyled,
  ClockStyled,
  ShareStyled,
  HeartStyled,
  DiscordStyled,
  TwitchStyled,
  XboxStyled,
  YoutubeStyled,
};

export default Icons;
