import * as React from 'react';

interface PlayerProps {
  videoAddress: string;
}

export class Player extends React.Component<PlayerProps> {
  constructor(props: PlayerProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <iframe width="560" height="315" src={this.props.videoAddress}
                frameBorder="0" allowFullScreen />
      </div>
    );
  }
}