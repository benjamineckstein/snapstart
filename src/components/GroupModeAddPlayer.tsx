import React, {ChangeEvent} from 'react';
import {PlayerLevel, playerLevelFromString, playerLevelToString} from '../types/PlayerLevel';
import {PlayersContext} from '../contexts/PlayersContext';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import {MenuItem} from '@material-ui/core';


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

    handleChangeName = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      this.setState({playerName: event.currentTarget.value!});
    }

    handleChangeLevel = (event: any): void => {

      let selectValue = event.target.value;
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
            <Input type="text" placeholder="Playername" value={this.state.playerName}
              onChange={this.handleChangeName}/>

            <Select value={this.state.playerLevel} onChange={this.handleChangeLevel}>
              {[PlayerLevel.JUNIOR, PlayerLevel.MIDDLE, PlayerLevel.SENIOR, PlayerLevel.PRINCIPLE, PlayerLevel.DISTINGUISHED].map(level =>
                <MenuItem key={level} value={level}>{playerLevelToString(level)}</MenuItem>)}
            </Select>

            <Button variant="outlined" color="primary" type="submit" >Add</Button>
          </form>
        </div>
      );
    }
}

export default GroupModeAddPlayer;