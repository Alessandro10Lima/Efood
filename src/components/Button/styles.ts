import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  background-color: ${cores.rosaEscuro};
  font-size: 14px;
  font-weight: bold;
  padding: 6px 12px;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  background-color: ${cores.rosaEscuro};
  font-size: 14px;
  font-weight: bold;
  padding: 6px 12px;
  text-decoration: none;
`
