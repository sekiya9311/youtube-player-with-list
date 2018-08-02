import * as React from 'react';

import { Player } from './Player';

interface ApplicationState {
  videoId: string;
  videoHeight: number;
  videoWidth: number;
}

const youtubeUrl = 'https://www.youtube.com/embed/';

export class Application extends React.Component<{}, ApplicationState> {
  constructor() {
    super({});
    this.state = {
      videoId: 'KnsLbogE4ps',
      videoHeight: 315,
      videoWidth: 560
    };
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.videoId}
          onChange={e => this.setState({videoId: e.target.value})} />
        <Player videoAddress={ youtubeUrl + this.state.videoId } 
        iframeHeight={this.state.videoHeight} iframeWidth={this.state.videoWidth} />
      </div>
    );
  }
}