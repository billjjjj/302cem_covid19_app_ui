import React from 'react';
import { Switch } from 'react-router-dom';

// route layout
import AuthRouteWithLayout from './components/RouteWithLayout/AuthRouteWithLayout';
// layout
import Dashboard from './layouts/Dashboard/Dashboard';
// components
import { Case, AddCase, EditCase } from './views';

const Routes = () => {
  return (
    <Switch>
      <AuthRouteWithLayout component={Case} exact layout={Dashboard} path="/dashboard" />
      {/* Product */}
      <AuthRouteWithLayout component={Case} exact layout={Dashboard} path="/cases" />
      <AuthRouteWithLayout component={AddCase} exact layout={Dashboard} path="/cases/add" />
      <AuthRouteWithLayout component={EditCase} exact layout={Dashboard} path="/cases/edit/:id" />
    </Switch>
  );
};

export default Routes;
