import { Link } from 'react-router-dom'

import { Imagem, Titulo } from './styles'

import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/Vector.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Link to="/">
      <img src={logo} alt="efood" />
    </Link>
    <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
  </Imagem>
)

export default Banner
