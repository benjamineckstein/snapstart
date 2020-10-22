import React from 'react';
import {Player} from '../types/Player';
import {playerLevelToString} from '../types/PlayerLevel';

type MyProps = {
    player: Player
};
type MyState = {};

class GroupModePlayer extends React.Component<MyProps, MyState> {


  render() { 
    return (
      <div className="playerListItem">
        <div>
          {this.props.player.name}
        </div>
        <div>
          {playerLevelToString(this.props.player.level)}
        </div>
        <div style={{textAlign: 'right'}}>
          {this.props.player.points}
        </div>
      </div>
    );
  }
}

export default GroupModePlayer;