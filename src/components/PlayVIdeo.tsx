import * as React from 'react';

import { 
  AppBar, 
  Toolbar,
  IconButton
} from '@material-ui/core';
import {
  Menu
} from '@material-ui/icons';

import { Player } from './Player';

import { ChannelLists } from '../model/ChannelLists';

interface PlayVideoState {
  videoId: string;
  videoHeight: number;
  videoWidth: number;
  channelLists: ChannelLists;
}

const youtubeUrl = 'https://www.youtube.com/embed/';

export class PlayVideo extends React.Component<{}, PlayVideoState> {
  constructor() {
    super({});
    this.state = {
      videoId: 'KnsLbogE4ps',
      videoHeight: 315,
      videoWidth: 560,
      channelLists: { lists: [] }
    };
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
        <input type="text" value={this.state.videoId}
          onChange={e => this.setState({videoId: e.target.value})} />
        <Player videoAddress={ youtubeUrl + this.state.videoId } 
        iframeHeight={this.state.videoHeight} iframeWidth={this.state.videoWidth} />
      </div>
    );
  }
}