import React from 'react';
import GroupModeQuestion from './GroupModeQuestion';
import GroupModeLeaderboard from './GroupModeLeaderboard';
import {Player} from '../types/Player';
import {PlayerLevel} from '../types/PlayerLevel';

type MyProps = {
    onResetGameMode: any
};
type MyState = {

    hasGameStarted: boolean,
    playerIdSequence: number,
    players: Player[]
};

class GroupMode extends React.Component<MyProps, MyState> {
    state: MyState = {
      hasGameStarted: false,
      playerIdSequence: 1,
      players: []
    };

    onStartGame = () => {
      if (this.state.players.length > 0) {
        this.setState({hasGameStarted: true})
      }
    }
 
    onAddPlayer = (playerName: string, playerLevel: PlayerLevel) => {

      let player2Id = this.state.playerIdSequence + 1;


      let player2: Player = {id: player2Id, name: playerName, level: playerLevel, points: 0}
      let players2 = this.state.players.concat(player2);
      this.setState({
        playerIdSequence: player2Id,
        players: players2
      });
    }

    onAddPointsToPlayer = (playerId: number, pointsToAdd: number) => {

      let player = this.state.players.find(player => player.id === playerId);
      if (!player) {
        return;
      }
      let playerIndex = this.state.players.indexOf(player);
      let playersCopy = this.state.players.slice();
      playersCopy[playerIndex].points += pointsToAdd;

      this.setState({
        players: playersCopy

      })


    }

    render() {
      return (
        <div className={'groupmode'}>
          <div className={'header'}>
            <button onClick={this.props.onResetGameMode}>Back</button>
          </div>
          <h1 style={{gridArea: 'questionHeader'}}>Questions</h1>
          <GroupModeQuestion hasGameStarted={this.state.hasGameStarted} players={this.state.players} onAddPointsToPlayer={this.onAddPointsToPlayer}
            onStartGame={this.onStartGame}/>
          <h1 style={{gridArea: 'leaderboardHeader'}}>{!this.state.hasGameStarted && 'Players'}{this.state.hasGameStarted && 'Leaderboard'}</h1>
          <GroupModeLeaderboard hasGameStarted={this.state.hasGameStarted} players={this.state.players}
            onAddPlayer={this.onAddPlayer}/>


        </div>
      );
    }
}

export default GroupMode;