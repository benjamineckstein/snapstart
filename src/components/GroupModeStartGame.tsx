import React from 'react';
import {PlayersContext, PlayersContextValue} from '../contexts/PlayersContext';
import GroupModeAddPlayer from './GroupModeAddPlayer';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import {playerLevelToString} from '../types/PlayerLevel';
import Fab from '@material-ui/core/Fab';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Typography from '@material-ui/core/Typography';

type MyProps = {
  onStartGame: any
};


//grid-template-areas: "header" "welcome" "addplayer" "listplayers";
function GroupModeStartGame(props: MyProps): JSX.Element {
  return (
    <PlayersContext.Consumer>{
      (contextValue: PlayersContextValue) : JSX.Element => (
        <React.Fragment>
          <div style={{gridArea:'welcome'}} className="theQuestion">
            <Typography variant="h4">
                Welcome to the group game. {contextValue.players.getPlayers().length} players are on board.
            </Typography>
          </div>
          <div className="btnStartGame" style={{gridArea:'startgame'}}>

            <Fab color="primary" variant="extended" disabled={!contextValue.players.hasPlayers()} onClick={(): void => {
              props.onStartGame();
            }}>
              <PlayCircleOutlineIcon />
              Start game
            </Fab>
          </div>
          <div style={{gridArea:'addplayer'}}>
            <GroupModeAddPlayer/>
          </div>
          <div style={{gridArea:'listplayers'}}>
            <div className="playerList">
              <List dense={false}>
                {contextValue.players.getPlayers().map(player => {
                  return (
                    <ListItem key={player.id}>
                      <ListItemAvatar>
                        <Avatar>{player.name.slice(0, 2)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={player.name} secondary={playerLevelToString(player.level)}/>
                      <ListItemSecondaryAction>
                        <IconButton edge="end"
                          onClick={(): void => {
                            contextValue.updatePlayers(contextValue.players.removePlayer(player.id));
                          }}><DeleteIcon/></IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>

                  );
                })}
              </List>
            </div>
          </div>
        </React.Fragment>
      )}
    </PlayersContext.Consumer>
  );
}

export default GroupModeStartGame;