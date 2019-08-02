import React from 'react';
import './App.css';
import Discover from './components/discover.js';
import {Container, Typography, Row, Column, Spacing} from "@ticketmaster/aurora";

function App() {
  return (
    // Structure App Components here
    <Container>
      <Spacing top={{"xSmall":"normal"}} />
      <Row>
        <Column
          large={12}
          medium={12}
          xLarge={12}
        /> 
        <div>
          <Typography.H1>
            Mock Event Configuration UI
          </Typography.H1>`
        </div>
      </Row>
      <Spacing top={{"xSmall":"normal"}} />
      <Discover></Discover>
   {/* Spit out results below */}
    </Container>

  );
}

export default App;
