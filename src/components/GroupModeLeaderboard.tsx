import React from 'react';
import GroupModePlayer from './GroupModePlayer';
import GroupModeAddPlayer from './GroupModeAddPlayer';
import {Player} from '../types/Player';
import {PlayersContext} from '../contexts/PlayersContext';

type MyProps = {
  hasGameStarted: boolean,

};
type MyState = {};

class GroupModeLeaderboard extends React.Component<MyProps, MyState> {

  static contextType = PlayersContext;


  getSortedPlayers = (): Player[] => {
    let sortedPlayers = this.context.players.getPlayers().slice().sort((player1: Player, player2: Player) => {
      return player2.points === player1.points ? player1.id - player2.id : player2.points - player1.points;
    });
    return sortedPlayers;
  }

  render(): JSX.Element {
    return (
      <div className={'leaderboard'}>
        <div className="playerList">
          {this.getSortedPlayers().map(player => {
            return (<GroupModePlayer key={player.id} player={player}/>);
          })}
        </div>
        <GroupModeAddPlayer hasGameStarted={this.props.hasGameStarted}/>
      </div>
    );
  }
}

export default GroupModeLeaderboard;