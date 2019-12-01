import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes as AuthRoutes } from './modules/auth/routes';

export const Routes = () => (
  <BrowserRouter>
    <AuthRoutes />
    {/* <Switch>
      <Route exact path='/' component={AuthRoutes} />
    </Switch> */}
  </BrowserRouter>
);
