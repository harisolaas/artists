import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../theme';
import GlobalStyles from './GlobalStyles';

const LayoutStyles = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 24px 0;
`;

const Layout: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <LayoutStyles>
      <GlobalStyles />
      {children}
    </LayoutStyles>
  </ThemeProvider>
);

export default Layout;
