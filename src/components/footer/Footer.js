import FooterStyles from "./Footer.styles";
import { Logo, FooterPaymentImg } from "../../assets/images";
import { Icons, NavItems, Container, Typography } from "..";

const Footer = () => {
  return (
    <FooterStyles>
      <div className='footer__content'>
        <Container>
          <div className='content__navbar'>
            <img src={Logo} alt='logo game - x' />
            <nav>
              <NavItems />
            </nav>
          </div>
          <div className='content__quicklinks'>
            <ul className='quicklink__list'>
              <li>
                <a href='/'>Faq</a>
              </li>
              <li>
                <a href='/'>Help center</a>
              </li>
              <li>
                <a href='/'>Terms of use</a>
              </li>
              <li>
                <a href='/'>Privacy</a>
              </li>
            </ul>
            <ul className='qicklink__social'>
              <li>
                <a href='/'>
                  <Icons.DiscordStyled />
                </a>
              </li>
              <li>
                <a href='/'>
                  <Icons.TwitchStyled />
                </a>
              </li>
              <li>
                <a href='/'>
                  <Icons.XboxStyled />
                </a>
              </li>
              <li>
                <a href='/'>
                  <Icons.YoutubeStyled />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className='footer__copyright'>
        <Container>
          <div className='copyright__content'>
            <Typography.Text className='copyright__text'>
              Copyright &copy;{new Date().getFullYear()}{" "}
              <a href='http://heydari-dev.ir' target='__blank'>
                Kamal Heydari
              </a>
              . all rights reserved
            </Typography.Text>
            <img src={FooterPaymentImg} alt='Online payment companies logo' />
          </div>
        </Container>
      </div>
    </FooterStyles>
  );
};

export default Footer;
