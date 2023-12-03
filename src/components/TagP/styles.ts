import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainerP = styled.a<Props>`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosaEscuro};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '14px')};
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 0px')};
  display: block;
  text-align: center;
  font-weight: 700;
  line-height: 16px;
`
