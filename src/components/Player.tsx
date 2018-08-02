import * as React from 'react';

interface PlayerProps {
  videoAddress: string;
  iframeWidth: number;
  iframeHeight: number;
}

export class Player extends React.Component<PlayerProps> {
  constructor(props: PlayerProps) {
    super(props);
  }
  render() {
    return (
      <iframe width={this.props.iframeWidth} height={this.props.iframeHeight}
        src={this.props.videoAddress} frameBorder="0" allowFullScreen />
    );
  }
}