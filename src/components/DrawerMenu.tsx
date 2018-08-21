import * as React from 'react';
import { ChannelLists } from '../model/ChannelLists';

export interface DrawerMenuProps {
  list: ChannelLists
};

export class DrawerMenu extends React.Component<DrawerMenuProps, {}> {
  constructor(props: DrawerMenuProps) {
    super(props);
  }
  render() {
    return (
      <div>
        DrawerMenu.tsx
      </div>
    );
  }
}