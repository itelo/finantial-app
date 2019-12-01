import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const Me = ({children}: any) => (
  <>
    <h1>me</h1>
    <BrowserRouter>
      <Switch>
        <Route path='/home/me' render={() => (<h1>Teste</h1>)} />
      </Switch>
    </BrowserRouter>
  </>
);
