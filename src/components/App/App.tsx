import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Pages
import Home from 'pages/Home';
import Pokedex from 'pages/Pokedex';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokedex">
          <Pokedex />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
