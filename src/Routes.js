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
      {/* Dashboard */}
      <AuthRouteWithLayout component={Case} exact layout={Dashboard} path="/dashboard" />
      {/* Cases */}
      <AuthRouteWithLayout component={Case} exact layout={Dashboard} path="/cases" />
      <AuthRouteWithLayout component={AddCase} exact layout={Dashboard} path="/cases/add" />
      <AuthRouteWithLayout component={EditCase} exact layout={Dashboard} path="/cases/edit/:id" />
      {/* Rules */}
      {/* Areas */}
      {/* Institutions */}
    </Switch>
  );
};

export default Routes;
