import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainerInfo = styled.a<Props>`
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosa};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '6px 10px')};
  display: inline-block;
  margin-left: 8px;
  font-weight: 700;
`
