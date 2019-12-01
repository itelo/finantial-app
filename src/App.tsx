import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
// import { Login } from './pages/Login';
// import { Login } from './pages/Login';
import { Grommet } from 'grommet';
import { AuthProvider } from './contexts/AuthContext';
import { Routes } from './routes';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  *, *::before, *::after {
    box-sizing: inherit;
    color: #414042;
  }

  body, html {
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
    font-family: 'Open Sans', sans-serif !important;
    -webkit-font-smoothing: antialiased !important;
  }

  input, textarea, button {
    font-family: 'Open Sans', sans-serif !important;
  }
`

const Layout = styled.div`
  background-color: #f1f2f2;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
`;

const App: React.FC = () => {
  return (
    <Grommet>
      <AuthProvider>
        <GlobalStyle />
        <Layout>
          <Routes />
        </Layout>
      </AuthProvider>
    </Grommet>
  );
}

export default App;
