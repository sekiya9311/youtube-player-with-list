import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';

import { PlayVideo } from './components/PlayVIdeo';

const Routing = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={PlayVideo} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  Routing,
  document.getElementById('root')
);