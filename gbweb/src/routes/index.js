import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn}/>
      <Route path="/register" component={SignUp}/>

      <Route path="/dashboard" component={Dashboard} isPrivate/>
      <Route path="/profile" component={Profile} isPrivate/>
    </Switch>
  );
}