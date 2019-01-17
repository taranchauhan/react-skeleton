import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from 'components/NavBar';
import Home from 'containers/Home';

const Wrapper = styled.div`
  width: 100%;
`;

const App = () => (
  <Wrapper>
    <NavBar />
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/another-page" component={Home} />
      </div>
    </Router>
  </Wrapper>
);

export default App;
