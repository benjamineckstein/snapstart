// eslint-disable-next-line
import React, {Component} from 'react';
import {GameMode} from "../types/GameMode";

type MyProps = {
    onChangeGameMode: any
};

function MainMenu(props :MyProps) {
    return (
            <div className="mainmenu">
                <h1>Choose a game mode</h1>
                <button onClick={() => props.onChangeGameMode(GameMode.GroupMode)}>Group</button>
                <button onClick={() => props.onChangeGameMode(GameMode.Assessment)}>Assessment</button>
                <button onClick={() => props.onChangeGameMode(GameMode.Lookup)}>Lookup</button>
            </div>
        );
}

export default MainMenu;