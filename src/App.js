import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Context } from './context';

import Home from './pages/home';
import Game from './pages/game';

const App = () => {
  return (
    <Context>
      <Router>
        <>
          <Route path={'/'} exact component={Home} />
          <Route path={'/game'} exact component={Game} />
        </>
      </Router>
    </Context>
  )
}

export default App;
