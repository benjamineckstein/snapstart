import React from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import GroupMode from './components/GroupMode';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';

type MyProps = {};

function App(props:MyProps): JSX.Element {
  return (
    <Router>
      <CssBaseline />
      <div>
        <Switch>
          <Route path="/groupmode">
            <GroupMode/>
          </Route>
          <Route path="/assessment">
            <MainMenu/>
          </Route>
          <Route path="/lookup">
            <MainMenu/>
          </Route>
          <Route path="/">
            <MainMenu/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
