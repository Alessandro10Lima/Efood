import styled from 'styled-components'

import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 360px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -40px;

  a {
    display: block;
    padding-top: 40px;
    align-items: center;
    width: 130px;
    margin: 0 auto;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  margin: 120px auto;
  text-align: center;
  max-width: 540px;
  font-weight: bold;
  color: ${cores.rosaEscuro};
`
