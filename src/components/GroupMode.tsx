import React from 'react';
import GroupModeQuestion from './GroupModeQuestion';
import GroupModeLeaderboard from './GroupModeLeaderboard';
import {Players} from '../types/Players';
import {PlayersContext, PlayersContextValue} from '../contexts/PlayersContext';
import GroupModeStartGame from './GroupModeStartGame';
import {Link} from 'react-router-dom';

type MyProps = {
};
type MyState = {

  playersContextValue: PlayersContextValue
  hasGameStarted: boolean,
};

class GroupMode extends React.Component<MyProps, MyState> {

  onStartGame = (): void => {
    if (this.state.playersContextValue.players.hasPlayers()) {
      this.setState((state, props) => ({hasGameStarted: true}));
    }
  }

  updatePlayers = (players: Players): void => {
    console.log('Update Players Context');
    console.log(this.state.playersContextValue.players);
    console.log(players);
    this.setState((state, props) => ({
      playersContextValue: {players: players, updatePlayers: this.updatePlayers}
    }))
  }

  constructor(props: MyProps) {
    super(props);
    this.state = {
      hasGameStarted: false,
      playersContextValue: {
        players: new Players(),
        updatePlayers: this.updatePlayers
      }
    }
  }

  render(): JSX.Element {
    console.log('Render GroupMode');
    return (
      <PlayersContext.Provider value={this.state.playersContextValue}>
        <div className={'groupmode'}>
          <div className={'header'}>
            <Link to={'/'}>Back</Link>
          </div>
          <h1 style={{gridArea: 'questionHeader'}}>{this.state.hasGameStarted && 'Questions'}</h1>
          {!this.state.hasGameStarted && <GroupModeStartGame onStartGame={this.onStartGame}/>}
          {this.state.hasGameStarted && <GroupModeQuestion/>}
          <h1 style={{gridArea: 'leaderboardHeader'}}>
            {!this.state.hasGameStarted && 'Players'}
            {this.state.hasGameStarted && 'Leaderboard'}
          </h1>
          <GroupModeLeaderboard hasGameStarted={this.state.hasGameStarted}/>
        </div>
      </PlayersContext.Provider>
    );
  }
}

export default GroupMode;