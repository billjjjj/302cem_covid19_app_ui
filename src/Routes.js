import React from 'react';
import { Switch } from 'react-router-dom';

// route layout
import AuthRouteWithLayout from './components/RouteWithLayout/AuthRouteWithLayout';
// layout
import Dashboard from './layouts/Dashboard/Dashboard';
// components
import {
  Case,
  AddCase,
  EditCase,
  HighRiskArea,
  AddHighRiskArea,
  EditHighRiskArea,
  Rule,
  AddRule,
  EditRule,
} from './views';

const Routes = () => {
  return (
    <Switch>
      {/* Dashboard */}
      <AuthRouteWithLayout component={Case} exact layout={Dashboard} path="/dashboard" />
      {/* Case */}
      <AuthRouteWithLayout component={Case} exact layout={Dashboard} path="/cases" />
      <AuthRouteWithLayout component={AddCase} exact layout={Dashboard} path="/cases/add" />
      <AuthRouteWithLayout component={EditCase} exact layout={Dashboard} path="/cases/edit/:id" />
      {/* Cases */}
      <AuthRouteWithLayout component={Case} exact layout={Dashboard} path="/cases" />
      <AuthRouteWithLayout component={AddCase} exact layout={Dashboard} path="/cases/add" />
      <AuthRouteWithLayout component={EditCase} exact layout={Dashboard} path="/cases/edit/:id" />
      {/* Rules */}
      <AuthRouteWithLayout component={Rule} exact layout={Dashboard} path="/rules" />
      <AuthRouteWithLayout component={AddRule} exact layout={Dashboard} path="/rules/add" />
      <AuthRouteWithLayout component={EditRule} exact layout={Dashboard} path="/rules/edit/:id" />
      {/* HighRiskArea */}
      <AuthRouteWithLayout component={HighRiskArea} exact layout={Dashboard} path="/areas" />
      <AuthRouteWithLayout component={AddHighRiskArea} exact layout={Dashboard} path="/areas/add" />
      <AuthRouteWithLayout
        component={EditHighRiskArea}
        exact
        layout={Dashboard}
        path="/areas/edit/:id"
      />
      {/* Institutions */}
    </Switch>
  );
};

export default Routes;
