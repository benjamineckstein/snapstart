import React from 'react';
import logo from './logo.svg';
import './App.css';
import {GameMode} from "./types/GameMode";
import MainMenu from "./components/MainMenu";
import GroupMode from "./components/GroupMode";


class App extends React.Component<{}, {
    gameMode: GameMode
}> {
    state = {count: 3, gameMode: GameMode.Startscreen};

    setGameMode = (mode:GameMode) => {
        console.log("Change Gamemode", mode);
        this.setState({gameMode:mode});
    }

    resetGameMode = () => {
        console.log("Reset Gamemode");
        this.setState({gameMode:GameMode.Startscreen});
    }

    renderMainMenu(){
        return (<MainMenu onChangeGameMode={this.setGameMode} />)
    }
    renderGroupMode(){
        return (<GroupMode onResetGameMode={this.resetGameMode} />)
    }

    render() {
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
