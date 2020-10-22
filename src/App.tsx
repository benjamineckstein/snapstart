import React from 'react';
import logo from './logo.svg';
import './App.css';
import {GameMode} from './types/GameMode';
import MainMenu from './components/MainMenu';
import GroupMode from './components/GroupMode';


class App extends React.Component<{}, {
    gameMode: GameMode
}> {
    state = {count: 3, gameMode: GameMode.Startscreen};

    setGameMode = (mode:GameMode):void => {
      this.setState({gameMode:mode});
    }

    resetGameMode = ():void => {
      this.setState({gameMode:GameMode.Startscreen});
    }

    renderMainMenu() :JSX.Element{
      return (<MainMenu onChangeGameMode={this.setGameMode} />)
    }
    renderGroupMode():JSX.Element{
      return (<GroupMode onResetGameMode={this.resetGameMode} />)
    }
 
    render():JSX.Element {
      if(this.state.gameMode === GameMode.Startscreen){
        return this.renderMainMenu();
      }
      if(this.state.gameMode === GameMode.GroupMode){
        return this.renderGroupMode();
      }
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                        To be implemented ...
            </p>
          </header>
        </div>
      );
    }
}

export default App;
