import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';
import LogIn from '../LogIn/index';
import Member from '../Member';
import Meeting from '../Meeting';
import Role from '../Role';
const Pages = () => (
  <Switch>
    <Route path="/members" component={Member} />
    <Route path="/meetings" component={Meeting} />
    <Route path="/roles" component={Role} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
