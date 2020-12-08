import React from 'react';
import {Player} from '../types/Player';
import {PlayersContext} from '../contexts/PlayersContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import {playerLevelToString} from '../types/PlayerLevel';
import List from '@material-ui/core/List';
import {Container} from '@material-ui/core';

type MyProps = {
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
    let currentPlayerId = this.context.players.getSelectedPlayer().id;
    return (
      <div className={'leaderboard'}>
        <Container maxWidth="xs">
          <List dense={true}>
            {this.getSortedPlayers().map(player => {
              return (
                <ListItem key={player.id} selected={false && player.id === currentPlayerId}>
                  <ListItemAvatar>
                    <Avatar>{player.name.slice(0, 2)}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={player.name} secondary={playerLevelToString(player.level) + ' - ' + player.points +  ' points'} />
                </ListItem>);

              //              <GroupModePlayer key={player.id} isSelected={player.id === currentPlayerId} player={player}/>);
            })}
          </List>
          <div/>
        </Container>
      </div>
    );
  }
}

export default GroupModeLeaderboard;