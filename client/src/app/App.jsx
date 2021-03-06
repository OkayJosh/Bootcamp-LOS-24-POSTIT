import React from 'react';
import {
  Switch,
  HashRouter as Router,
  Route
} from 'react-router-dom';
import 'jquery/dist/jquery';
import {
  Register, Login, RequestPassword,
  ResetPassword, Dashboard, Groups,
  Group, SearchWiki, NewGroup
} from '../components/layout';
import { Home, NotFound } from '../components/commonViews';
import '../styles/index.scss';

/**
 * App Component
 *
 * @method App
 *
 * @returns {object} JSX
 */
const App = () =>
  (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/request-password' component={RequestPassword} />
        <Route path='/reset-password/:hash' component={ResetPassword} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/groups' component={Groups} />
        <Route path='/groups/:groupname' component={Group} />
        <Route path='/search-wiki' component={SearchWiki} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );

export default App;
