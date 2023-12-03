import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosaClaro};
  padding: 32px 0;
  font-size: 14px;
  color: ${cores.rosaEscuro};

  p {
    font-size: 10px;
    width: 480px;
    text-align: center;
    margin: 0 auto;
  }
`
export const SectionTitle = styled.div`
  margin: 0 auto;
`
export const Links = styled.ul`
  display: flex;
  margin: 32px auto;
  margin-bottom: 80px;
`
export const LinkDois = styled.a`
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  display: grid;
  text-align: center;
`
