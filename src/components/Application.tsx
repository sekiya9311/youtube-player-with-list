import * as React from 'react';

import { Player } from './Player';

export class Application extends React.Component {
  render() {
    const address: string = "https://www.youtube.com/embed/KnsLbogE4ps";
    return (
      <div>
        <Player videoAddress={ address } />
      </div>
    );
  }
}