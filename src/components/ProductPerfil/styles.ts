import styled from 'styled-components'
import { cores } from '../../styles'

export const CardP = styled.div`
  background-color: ${cores.rosaEscuro};
  position: relative;
  border: 1px solid ${cores.rosaEscuro};
  margin-bottom: 48px;
  padding: 8px;
`

export const TituloP = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
  color: ${cores.rosaClaro};
  padding: 0 8px;
`
export const DescricaoP = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
  color: ${cores.rosaClaro};
  padding: 0 8px;
`
