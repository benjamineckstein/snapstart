import React from 'react';
import {Player} from '../types/Player';
import {playerLevelToString} from '../types/PlayerLevel';

type MyProps = {
  player: Player
};

function GroupModePlayer(props: MyProps): JSX.Element {
  return (
    <div className="playerListItem">
      <div>
        {props.player.name}
      </div>
      <div>
        {playerLevelToString(props.player.level)}
      </div>
      <div style={{textAlign: 'right'}}>
        {props.player.points}
      </div>
    </div>
  );
}

export default GroupModePlayer;