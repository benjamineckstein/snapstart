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
    return this.props.hasGameStarted ? this.renderLeaderBoard(): this.renderPlayers();
  }
  renderPlayers(): JSX.Element {
    let context = this.context;
    return (
      <div className={'leaderboard'}>
        <div className="playerList">
          {this.getSortedPlayers().map(player => {
            return (<div key={player.id} onClick={(): void => {
              context.updatePlayers(context.players.removePlayer(player.id));
            }}><GroupModePlayer key={player.id} isSelected={false} player={player}/></div>);
          })}
        </div>
        <GroupModeAddPlayer hasGameStarted={this.props.hasGameStarted}/>
      </div>
    );
  }
  renderLeaderBoard(): JSX.Element {
    let currentPlayerId = this.context.players.getSelectedPlayer().id;
    return (
      <div className={'leaderboard'}>
        <div className="leaderboardList">
          {this.getSortedPlayers().map(player => {
            return (<GroupModePlayer key={player.id} isSelected={player.id === currentPlayerId} player={player}/>);
          })}
        </div>
        <GroupModeAddPlayer hasGameStarted={this.props.hasGameStarted}/>
      </div>
    );
  }
}

export default GroupModeLeaderboard;