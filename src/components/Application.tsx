import * as React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer
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
import { ChannelLists } from '../model/ChannelLists';
import { DrawerMenu } from './DrawerMenu';

interface ApplicationState {
  sideBarOpen: boolean,
  list: ChannelLists
};

export class Application extends React.Component<{}, ApplicationState> {
  constructor() {
    super({});
    this.state = {
      sideBarOpen: false,
      list: {lists: []}
    };
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.setSidebarState(true)}>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.sideBarOpen} onClose={this.setSidebarState(false)}>
          <DrawerMenu list={this.state.list} />
        </Drawer>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={PlayVideo} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  setSidebarState(sideBarState: boolean) {
    return () => {
      this.setState({
        sideBarOpen: sideBarState,
      });
    }
  }
}