import React, { Suspense, lazy } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Layout from './components/Layout';

const List = lazy(() => import('./views/List'));
const Artist = lazy(() => import('./views/Artist'));

function App() {
  return (
    <Layout>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/list" component={List} />
            <Route path="/artist/:id" component={Artist} />
            <Redirect to="/list" />
          </Switch>
        </Suspense>
      </Router>
    </Layout>
  );
}

export default App;
