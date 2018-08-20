import * as React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton
} from '@material-ui/core';

import {
  Menu
} from '@material-ui/icons';

import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';

import { PlayVideo } from './PlayVIdeo';

const Routing = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={PlayVideo} />
    </Switch>
  </BrowserRouter>
);

export class Application extends React.Component<{}, {}> {
  constructor() {
    super({});
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Routing />
      </div>
    );
  }
}