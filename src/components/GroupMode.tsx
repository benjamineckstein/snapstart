import React from 'react';
import GroupModeQuestion from './GroupModeQuestion';
import GroupModeLeaderboard from './GroupModeLeaderboard';
import {Players} from '../types/Players';
import {PlayersContext, PlayersContextValue} from '../contexts/PlayersContext';
import GroupModeStartGame from './GroupModeStartGame';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

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
    return this.state.hasGameStarted? this.renderStartedGame():this.renderPrepareGame();
  }
  renderStartedGame(): JSX.Element {
    return (
      <PlayersContext.Provider value={this.state.playersContextValue}>
        <div className={'groupmode'}>
          <div className={'header'}>
            <Button color="primary" component={Link} to="/">Back</Button>
          </div>
          <GroupModeQuestion/>
          <GroupModeLeaderboard/>
        </div>
      </PlayersContext.Provider>
    );
  }
  renderPrepareGame(): JSX.Element {
    return (
      <PlayersContext.Provider value={this.state.playersContextValue}>
        <div className={'groupmode_preparation'}>
          <div className={'header'}>
            <Button color="primary" component={Link} to="/">Back</Button>
          </div>
          <GroupModeStartGame onStartGame={this.onStartGame}/>
        </div>
      </PlayersContext.Provider>
    );
  }
}

export default GroupMode;