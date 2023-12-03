import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const LinkItem = styled.li`
  color: ${cores.rosaEscuro};
  margin: 0 auto;
`
export const LinkCart = styled.a`
  color: ${cores.rosaEscuro};
  margin: 0 auto;
  margin-right: 0;
`
export const LinkHome = styled.div`
  justify-content: center;
`

export const ImagemP = styled.div`
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -40px;

  a {
    display: block;
    padding-top: 40px;
    align-items: center;
  }
`
export const ImagemFundo = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  a {
    display: block;
    padding-top: 40px;
    align-items: center;
  }
`
export const TituloPDois = styled.h3`
  font-size: 32px;
  font-weight: bold;
  display: inline-block;
  color: ${cores.branco};
  line-height: 38px;
  padding-top: 150px;
`
export const DescricaoPDois = styled.p`
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: 100;
  display: block;
  color: rgba(255, 255, 255, 0.7);
  line-height: 38px;
  padding-top: 25px;
`
