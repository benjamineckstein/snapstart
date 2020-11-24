import {Player} from './Player';
import {PlayerLevel} from './PlayerLevel';
import {shuffle, clone} from 'lodash';

export class Players {
  players: Player[] = [];
  playerIdSequence: number = 1;

  playersThisRound: Player[] = [];


  createNewPlayer = (playerName: string, playerLevel: PlayerLevel): Players => {

    let playersClone = this.clone();
    playersClone.playerIdSequence++;
    let player: Player = {id: playersClone.playerIdSequence, name: playerName, level: playerLevel, points: 0};
    playersClone.players.push(player);
    playersClone.playersThisRound = shuffle(clone(playersClone.players));
    return playersClone;
  }
  addPoints = (playerId: number, points: number): Players => {

    let playersClone = this.clone();
    playersClone.players.filter(player => player.id === playerId).forEach(player => player.points = player.points + points);
    return playersClone;
  }

  pickRandomNextPlayer = (): Players => {
    let playersClone = this.clone();
    if(playersClone.playersThisRound.length <= 1){
      playersClone.playersThisRound = shuffle(clone(playersClone.players));
    }
    else {
      playersClone.playersThisRound.shift();
    }
    return playersClone;
  };

  getSelectedPlayer = (): Player => {
    if(this.playersThisRound.length < 1){
      throw new Error('No player selected');
    }
    return this.playersThisRound[0];
  }

  getPlayers = (): Player[] => this.players;

  hasPlayers = (): boolean => this.players.length > 0;

  clone = ():Players => {
    //TODO not so easy to clone class instances with methods
    let playersClone = new Players();
    playersClone.players = clone(this.players);
    playersClone.playersThisRound = clone(this.playersThisRound);
    playersClone.playerIdSequence = this.playerIdSequence;
    return playersClone;
  }

}