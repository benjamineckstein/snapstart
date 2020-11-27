import React from 'react';
import {PlayersContext, PlayersContextValue} from '../contexts/PlayersContext';
import {Button} from '@material-ui/core';

type MyProps = {
  onStartGame: any
};

function GroupModeStartGame(props: MyProps): JSX.Element {
  return (
    <PlayersContext.Consumer>{
      (contextValue: PlayersContextValue) : JSX.Element => (
        <div className={'question'}>
          <div/>
          <span className="theQuestion">
                Welcome to the group game. {contextValue.players.getPlayers().length} players are on board.
          </span>
          <Button variant="contained" color="primary" className="btnStartGame" disabled={!contextValue.players.hasPlayers()}
            onClick={(): void => {
              props.onStartGame();
            }}>Start game
          </Button>
        </div>
      )}
    </PlayersContext.Consumer>
  );
}

export default GroupModeStartGame;