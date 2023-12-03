import { TagContainerP } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const TagP = ({ children, size = 'small' }: Props) => (
  <TagContainerP size={size}>{children}</TagContainerP>
)

export default TagP
