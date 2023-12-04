import Tag from '../Tag'

import TagInfo from '../TagInfo'

import estrela from '../../assets/images/estrela.png'

import { Card, Titulo, Descricao, Infos, Rating } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  rating: string
}

const Product = ({
  title,
  category,
  description,
  infos,
  image,
  rating
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <TagInfo key={info}>{info}</TagInfo>
      ))}
    </Infos>
    <div>
      <Titulo>{title}</Titulo>
      <Rating>
        {rating}
        <div>
          <img src={estrela} alt={title} />
        </div>
      </Rating>
    </div>
    <Descricao>{description}</Descricao>
    <Tag>{category}</Tag>
  </Card>
)

export default Product
