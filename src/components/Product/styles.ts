import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border-radius: 2px;
  position: relative;
  border: 1px solid ${cores.rosaEscuro};
  margin-bottom: 48px;
  padding-bottom: 8px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
  color: ${cores.rosaEscuro};
  padding: 0 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
  color: ${cores.rosaEscuro};
  padding: 0 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Rating = styled.p`
  position: absolute;
  top: 230px;
  left: 420px;
  display: block;
  color: ${cores.rosaEscuro};
  font-weight: bold;
`
