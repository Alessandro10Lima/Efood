import Foods from '../../models/Foods'
import ProductPerfil from '../ProductPerfil'

import { ContainerP, ListP } from './styles'

export type Props = {
  title: string
  foods: Foods[]
}

const FoodPerfil = ({ title, foods }: Props) => (
  <ContainerP>
    <div className="container">
      <h2>{title}</h2>
      <ListP>
        {foods.map((food) => (
          <ProductPerfil
            key={food.id}
            category={food.category}
            description={food.description}
            image={food.image}
            title={food.title}
          />
        ))}
      </ListP>
    </div>
  </ContainerP>
)

export default FoodPerfil
