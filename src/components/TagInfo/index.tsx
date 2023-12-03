import { TagContainerInfo } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const TagInfo = ({ children, size = 'small' }: Props) => (
  <TagContainerInfo size={size}>{children}</TagContainerInfo>
)

export default TagInfo
