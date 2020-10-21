import React from 'react';
import List from '../list/List';
import { 
  BrowserRouter as Router,
  Route, 
  Switch,
} from 'react-router-dom';
import Detail from '../detail/Detail';
import { render } from 'react-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
          component={List} />
        <Route exact path="/detail/:name"
          component={Detail} />
      </Switch>
    </Router>
  );
}
