import Foods from '../../models/Foods'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  foods: Foods[]
}

const FoodList = ({ title, foods }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            category={food.category}
            description={food.description}
            image={food.image}
            infos={food.infos}
            title={food.title}
            rating={food.rating}
            system={''}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default FoodList
