import {Players} from '../types/Players';
import React from 'react';

export interface PlayersContextValue {
  players: Players,
  updatePlayers: (players:Players)=>void
}

export const PlayersContext = React.createContext({
  players: new Players(),
  updatePlayers: (players:Players) => {
    console.warn('Function updatePlayers() not implemented implementiert!');
  }});