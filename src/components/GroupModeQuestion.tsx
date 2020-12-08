import React from 'react';
import {Questions} from '../types/Questions';
import {Player} from '../types/Player';
import {PlayersContext} from '../contexts/PlayersContext';
import Topics from '../types/Topics';
import GroupModeQuestionCard from './GroupModeQuestionCard';
import GroupModeTopicCard from './GroupModeTopicCard';
import Container from '@material-ui/core/Container';

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
    return (
      <div className={'question'}>
        <Container maxWidth="sm">
          {this.state.needToChoose ? this.renderChooseTopic() : this.renderChooseAnswer()}
        </Container>
      </div>
    )
  }

  renderChooseTopic(): JSX.Element {
    let currentPlayer = this.context.players.getSelectedPlayer();
    return (
      <GroupModeTopicCard player={currentPlayer} questions={this.state.questions} onChooseTopic={this.chooseTopic}/>
    )
  }
  renderChooseAnswer(): JSX.Element {
    let currentPlayer = this.context.players.getSelectedPlayer();
    return (
      <GroupModeQuestionCard player={currentPlayer} question={this.state.questions.selectedQuestion} onEvaluate={this.evaluateQuestion}/>
    )
  }

}

export default GroupModeQuestion;