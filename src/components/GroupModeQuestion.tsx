import React from 'react';
import Questions, {Question} from "../types/Questions";
import {Player} from "../types/Player";
import {playerLevelToString} from "../types/PlayerLevel";

type MyProps = {
    hasGameStarted: boolean,
    players: Player[],
    onStartGame: any
    onAddPointsToPlayer: any

};
type MyState = {
    currentQuestion: Question
    currentPlayer: Player | null
};

class GroupModeQuestion extends React.Component<MyProps, MyState> {

    state: MyState = {
        currentQuestion: new Questions().getRandomQuestion(),
        currentPlayer: null
    }

    evaluateQuestion = (points: number): void => {
        this.props.onAddPointsToPlayer(this.state.currentPlayer?.id, points);

        let currentPlayer = this.pickRandomPlayer();
        this.setState({
            currentQuestion: new Questions().getRandomQuestionLimitedByLevel(currentPlayer.level),
            currentPlayer: currentPlayer
        })
    }

    onStartGame = (): void => {

        this.props.onStartGame();

        let currentPlayer = this.pickRandomPlayer();
        this.setState({
            currentQuestion: new Questions().getRandomQuestionLimitedByLevel(currentPlayer.level),
            currentPlayer: currentPlayer
        })

    }

    pickRandomPlayer = (): Player => {
        return this.props.players[Math.floor(Math.random() * this.props.players.length)];
    }

    render() {
        if (this.props.hasGameStarted) {
            return (
                <div className={"question"}>
                    <div className="thePlayer">
                        {this.state.currentPlayer?.name} ({this.state.currentPlayer?.level})
                    </div>
                    <span className="theQuestion">
                    {this.state.currentQuestion.question}
                        <span>{this.state.currentQuestion.topic}</span>
                    <span>Level: {playerLevelToString(this.state.currentQuestion.level)}</span>
                    </span>
                    <div className="questionEvaluate">
                        <h3>Evaluate</h3>
                        <button onClick={() => this.evaluateQuestion(1)}>1</button>
                        <button onClick={() => this.evaluateQuestion(2)}>2</button>
                        <button onClick={() => this.evaluateQuestion(3)}>3</button>
                        <button onClick={() => this.evaluateQuestion(4)}>4</button>
                        <button onClick={() => this.evaluateQuestion(5)}>5</button>
                    </div>
                </div>
            );

        }
        return (
            <div className={"question"}>
                <div></div>
                <span className="theQuestion">
                Welcome to the group game. {this.props.players.length} players are on board.
                    </span>
                <button className="btnStartGame" disabled={this.props.players.length <= 0}
                        onClick={this.onStartGame}>Start game
                </button>
            </div>
        );
    }
}

export default GroupModeQuestion;