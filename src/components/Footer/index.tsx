import { Link } from 'react-router-dom'

import { Container, FooterSection, Links, LinkDois } from './styles'

const currentYear = new Date().getFullYear()

import logo from '../../assets/images/logo.svg'

import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Links>
          <li>
            <LinkDois>
              <a href="#">
                <img src={instagram} alt="insta" />
              </a>
            </LinkDois>
          </li>
          <li>
            <LinkDois>
              <a href="#">
                <img src={facebook} alt="face" />
              </a>
            </LinkDois>
          </li>
          <li>
            <LinkDois>
              <a href="#">
                <img src={twitter} alt="twi" />
              </a>
            </LinkDois>
          </li>
        </Links>
      </FooterSection>
      <p>
        {currentYear} - &copy; efood Todos os direitos reservados. A efood é uma
        plataforma para divulgação de estabelecimentos, a responsabilidade pela
        entrega, qualidade dos produtos é toda do estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
