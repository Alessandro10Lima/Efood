import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#FFF8F2',
  // preto: '#111',
  rosaClaro: '#FFEBD9',
  rosaEscuro: '#E66767',
  branco: '#fff'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body{
  background-color: ${cores.rosa};
  // color: ${cores.rosa};
  padding-top: 40px;
}

.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
