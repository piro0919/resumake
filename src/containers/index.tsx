import Pages from './pages';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Containers: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Pages} exact={true} path="/" />
    </Switch>
  </BrowserRouter>
);

export default Containers;
