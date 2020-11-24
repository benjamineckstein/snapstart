import React from 'react';
import {PlayerLevel, playerLevelFromString, playerLevelToString} from '../types/PlayerLevel';
import {PlayersContext} from '../contexts/PlayersContext';

type MyProps = {
    hasGameStarted: boolean

};
type MyState = {

    playerName: string,
    playerLevel: string

};

class GroupModeAddPlayer extends React.Component<MyProps, MyState> {

  static contextType = PlayersContext;

  constructor(props: MyProps) {
    super(props);
    this.state = {playerName: '', playerLevel: PlayerLevel.JUNIOR + ''};
  }

    handleChangeName = (event: React.FormEvent<HTMLInputElement>): void => {
      this.setState({playerName: event.currentTarget.value});
    }

    handleChangeLevel = (event: React.FormEvent<HTMLSelectElement>): void => {

      let selectValue = event.currentTarget.value;
      this.setState({playerLevel: selectValue});
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      if (!this.state.playerName) {
        return;
      }
      let playerLevelKey: number = parseInt(this.state.playerLevel);
      let playerLevel: PlayerLevel = playerLevelFromString(playerLevelKey);
      this.context.updatePlayers(this.context.players.createNewPlayer(this.state.playerName, playerLevel))
      this.setState({playerName: ''});
    }

    render(): JSX.Element {
      if (this.props.hasGameStarted) {
        return (<div/>);
      }
      return (
        <div className="addPlayer">
          <form style={{display: 'grid', gridTemplateColumns: '4fr 2fr 1fr'}} onSubmit={this.handleSubmit}>
            <input style={{fontSize: 24}} type="text" placeholder="Playername" value={this.state.playerName}
              onChange={this.handleChangeName}/>

            <select style={{fontSize: 24}} value={this.state.playerLevel} onChange={this.handleChangeLevel}>
              {[PlayerLevel.JUNIOR, PlayerLevel.MIDDLE, PlayerLevel.SENIOR, PlayerLevel.PRINCIPLE, PlayerLevel.DISTINGUISHED].map(level =>
                <option key={level} value={level}>{playerLevelToString(level)}</option>)}
            </select>

            <input style={{fontSize: 24}} type="submit" value="Add"/>
          </form>
        </div>
      );
    }
}

export default GroupModeAddPlayer;