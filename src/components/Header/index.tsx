import { Link } from 'react-router-dom'

import {
  DescricaoPDois,
  HeaderBar,
  ImagemFundo,
  LinkCart,
  LinkHome,
  LinkItem,
  TituloPDois
} from './styles'

import logo from '../../assets/images/logo.svg'
import { ImagemP } from './styles'
import bannerImg from '../../assets/images/Vector.png'
import imgFundo from '../../assets/images/imagemFundo.png'

const Header = () => (
  <>
    <div>
      <ImagemP style={{ backgroundImage: `url(${bannerImg})` }}>
        <HeaderBar className="container">
          <div>
            <Link to="/">
              <LinkItem>Restaurantes</LinkItem>
            </Link>
          </div>
          <LinkHome>
            <Link to="/">
              <img src={logo} alt="efood" />
            </Link>
          </LinkHome>
          <div>
            <LinkCart href="#">0 - produto(s) no carrinho</LinkCart>
          </div>
        </HeaderBar>
      </ImagemP>
    </div>
    <div>
      <ImagemFundo style={{ backgroundImage: `url(${imgFundo})` }}>
        <div className="container">
          <DescricaoPDois>Italiana</DescricaoPDois>
          <TituloPDois>La Dolce Vita Trattoria</TituloPDois>
        </div>
      </ImagemFundo>
    </div>
  </>
)

export default Header
