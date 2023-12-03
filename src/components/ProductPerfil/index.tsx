import TagP from '../TagP'

import { CardP, TituloP, DescricaoP } from './styles'

type Props = {
  title: string
  category: string
  description: string
  image: string
}

const ProductPerfil = ({ title, category, description, image }: Props) => (
  <CardP>
    <img src={image} alt={title} />
    <TituloP>{title}</TituloP>
    <DescricaoP>{description}</DescricaoP>
    <TagP>{category}</TagP>
  </CardP>
)

export default ProductPerfil
