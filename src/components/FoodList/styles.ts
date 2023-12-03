import styled from 'styled-components'

import { Props } from '.'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'foods'>>`
  padding-bottom: 80px;

  ${Card} {
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 80px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
