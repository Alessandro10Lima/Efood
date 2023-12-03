class Foods {
  category: string
  description: string
  image: string
  infos: string[]
  title: string
  id: number
  rating: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    rating: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.rating = rating
  }
}

export default Foods
