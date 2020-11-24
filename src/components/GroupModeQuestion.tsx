import React from 'react';
import {Questions} from '../types/Questions';
import {Player} from '../types/Player';
import {playerLevelToString} from '../types/PlayerLevel';
import {PlayersContext} from '../contexts/PlayersContext';
import Topics from '../types/Topics';

type MyProps = {
};
type MyState = {
  questions: Questions,
  evaluateHint: string,
  chosenTopic: number,
  needToChoose: boolean
};

class GroupModeQuestion extends React.Component<MyProps, MyState> {

  static contextType = PlayersContext;

  static topicData = Topics.createInstance();

  constructor(props: MyProps) {

    super(props);
    this.state = {
      questions: Questions.createInstance(),
      evaluateHint : '',
      needToChoose : true,
      chosenTopic: 0
    }
  }


  evaluateQuestion = (points: number): void => {

    this.context.updatePlayers(this.context.players.addPoints(this.context.players.getSelectedPlayer().id!, points).pickRandomNextPlayer());

    let questions = this.state.questions;
    if(this.state.questions.getRemainingQuestions() === 0){
      //TODO: refill all questions or end the game?
      console.log('Questions empty. Reload all questions.', this.state.questions.getRemainingQuestions())
      questions = Questions.createInstance();
    }
    console.log('Questions left %i', this.state.questions.getRemainingQuestions())

    this.setState((state,props) => ({
      questions: questions,
      needToChoose: true,
      evaluateHint: ''
    }));
  }

  chooseTopic = (topic_id: number): void => {

    let questions2 = this.state.questions.selectNextQuestion(this.context.players.getSelectedPlayer().level,topic_id);

    this.setState((state,props) => ({
      questions: questions2,
      needToChoose: false
    }));
  }

  pickRandomPlayer = (): Player => {
    return this.context.players.pickRandomPlayer();
  }

  render(): JSX.Element {
    return this.state.needToChoose ? this.renderChooseTopic() : this.renderChooseAnswer();
  }

  renderChooseTopic(): JSX.Element {
    let currentPlayer = this.context.players.getSelectedPlayer();
    return (
      <div className={'question'}>
        <div className="thePlayer">
          {currentPlayer.name} {playerLevelToString(currentPlayer.level)}
        </div>
        <span className="theTopicChoosing">
          Please choose a topic
        </span>
        <div className="theTopicList">
          <h3>Topics</h3>
          {this.state.questions.getAvailableTopics(currentPlayer.level).map(topic_id => {
            return (<button key={topic_id} onClick={(): void => this.chooseTopic(topic_id)}>{GroupModeQuestion.topicData.topicIdToTopicName(topic_id).name}</button>);
          })}
        </div>
      </div>
    )
  }
  renderChooseAnswer(): JSX.Element {
    let currentPlayer = this.context.players.getSelectedPlayer();
    return (
      <div className={'question'}>
        <div className="thePlayer">
          {currentPlayer.name} {playerLevelToString(currentPlayer.level)}
        </div>
        <span className="theQuestion">
          {this.state.questions.selectedQuestion.question}
          <span>{GroupModeQuestion.topicData.topicIdToTopicName(this.state.questions.selectedQuestion.topic_id).name}</span>
          <span>Level: {playerLevelToString(this.state.questions.selectedQuestion.level_id)}</span>
        </span>
        <div className="questionEvaluate">
          <h3>Evaluate</h3>
          <button onMouseEnter={(): void => this.setState({evaluateHint: '+1 at least you tried'})}
            onClick={(): void => this.evaluateQuestion(1)}>1
          </button>
          <button onMouseEnter={(): void => this.setState({evaluateHint: '+2 you got the basic idea'})}
            onClick={(): void => this.evaluateQuestion(2)}>2
          </button>
          <button onMouseEnter={(): void => this.setState({evaluateHint: '+3 its an OK answer'})}
            onClick={(): void => this.evaluateQuestion(3)}>3
          </button>
          <button onMouseEnter={(): void => this.setState({evaluateHint: '+4 solid answer with good terminology'})}
            onClick={(): void => this.evaluateQuestion(4)}>4
          </button>
          <button onMouseEnter={(): void => this.setState({evaluateHint: '+5 Perfect answer you could imagine'})}
            onClick={(): void => this.evaluateQuestion(5)}>5
          </button>
          <div>{this.state.evaluateHint}</div>
        </div>
      </div>
    )
  }

}

export default GroupModeQuestion;