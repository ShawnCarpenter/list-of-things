import React from 'react';
import { 
  BrowserRouter as Router,
  Route, 
  Switch,
} from 'react-router-dom';
import './app.css';
import List from '../list/List';
import Detail from '../detail/Detail';


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
