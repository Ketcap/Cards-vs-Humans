import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Context } from './context';

import Home from './pages/home';
import Game from './pages/game';
import History from './pages/history';

const App = () => {
  return (
    <Context>
      <Router>
        <>
          <Route path={'/'} exact component={Home} />
          <Route path={'/game'} exact component={Game} />
          <Route path={'/history'} exact component={History} />
        </>
      </Router>
    </Context>
  )
}

export default App;
