import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pages from './pages';

const Containers: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Pages} exact={true} path="/" />
    </Switch>
  </BrowserRouter>
);

export default Containers;
