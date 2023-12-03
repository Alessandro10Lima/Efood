import styled from 'styled-components'

import { Props } from '.'
import { CardP } from '../ProductPerfil/styles'

export const ContainerP = styled.section<Omit<Props, 'title' | 'foods'>>`
  padding-bottom: 80px;

  ${CardP} {
  }
`

export const ListP = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 56px;
  width: 320px;
`
export const TitleP = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
