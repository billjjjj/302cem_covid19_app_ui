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
  Institution,
  AddInstitution,
  EditInstitution,
} from './views';

const Routes = () => {
  return (
    <Switch>
      {/* Manage Cases */}
      <AuthRouteWithLayout component={Case} exact layout={Dashboard} path="/cases" />
      <AuthRouteWithLayout component={AddCase} exact layout={Dashboard} path="/cases/add" />
      <AuthRouteWithLayout component={EditCase} exact layout={Dashboard} path="/cases/edit/:id" />
      {/* Manage Rules */}
      <AuthRouteWithLayout component={Rule} exact layout={Dashboard} path="/rules" />
      <AuthRouteWithLayout component={AddRule} exact layout={Dashboard} path="/rules/add" />
      <AuthRouteWithLayout component={EditRule} exact layout={Dashboard} path="/rules/edit/:id" />
      {/* Manage HighRiskArea */}
      <AuthRouteWithLayout component={HighRiskArea} exact layout={Dashboard} path="/areas" />
      <AuthRouteWithLayout component={AddHighRiskArea} exact layout={Dashboard} path="/areas/add" />
      <AuthRouteWithLayout
        component={EditHighRiskArea}
        exact
        layout={Dashboard}
        path="/areas/edit/:id"
      />
      {/* Manage Institutions */}
      <AuthRouteWithLayout component={Institution} exact layout={Dashboard} path="/institutions" />
      <AuthRouteWithLayout
        component={AddInstitution}
        exact
        layout={Dashboard}
        path="/institutions/add"
      />
      <AuthRouteWithLayout
        component={EditInstitution}
        exact
        layout={Dashboard}
        path="/institutions/edit/:id"
      />
    </Switch>
  );
};

export default Routes;
