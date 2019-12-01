import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Register, Login } from './pages';
import { AuthLayout } from './layout';

export const Routes = () => {
  return (
    <AuthLayout>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </AuthLayout>
  )
};
