import React from 'react';
import styled from 'styled-components';

import logo from './logo.png';

const Header = styled.header`
  display: block;
  background: #205061;
  position: relative;
  z-index: 99999;
  top: 0;
  width: 100%;
  height: 106px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  z-index: 99;
  height: 100%;
  max-width: 1080px;
  margin: auto;
  text-align: left;
`;

const Logo = styled.img`
  width: 100px;
`;

const App = () => (
  <Header>
    <Container>
      <Logo src={logo} alt="Logo" />
    </Container>
  </Header>
);

export default App;
