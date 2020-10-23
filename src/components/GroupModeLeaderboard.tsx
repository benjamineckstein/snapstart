import React from 'react';
import GroupModePlayer from './GroupModePlayer';
import GroupModeAddPlayer from './GroupModeAddPlayer';
import {Player} from '../types/Player';

type MyProps = {
    hasGameStarted: boolean,
    players: Player[],
    onAddPlayer: any

};
type MyState = {};

class GroupModeLeaderboard extends React.Component<MyProps, MyState> {

    getSortedPlayers = (): Player[] => {
      return this.props.players.slice().sort((player1, player2) => {

        if (player2.points === player1.points) {
          return player1.id - player2.id;
        }
        return player2.points - player1.points;
      });
    }
 
    render():JSX.Element {
      return (
        <div className={'leaderboard'}>
          <div className="playerList">
            {this.getSortedPlayers().map(player => {
              return (<GroupModePlayer key={player.id} player={player}/>);
            })}
          </div>
          <GroupModeAddPlayer hasGameStarted={this.props.hasGameStarted} onAddPlayer={this.props.onAddPlayer}/>
        </div>
      );
    }
}

export default GroupModeLeaderboard;