import {PlayerLevel} from './PlayerLevel';

const myQuestions = [
  {topic: 'CI / CD and Provisioning', level: PlayerLevel.JUNIOR, question: 'What is a pipeline?'},
  {topic: 'Database', level: PlayerLevel.JUNIOR, question: 'Can you explain the n+1 problem?'},
  {topic: 'Testing & Test Automation', level: PlayerLevel.JUNIOR, question: 'Can you explain the testing pyramid?'},
  {topic: 'Testing & Test Automation', level: PlayerLevel.JUNIOR, question: 'What is TDD?'},
  {topic: 'Testing & Test Automation', level: PlayerLevel.MIDDLE, question: 'What are TestContainers?'},
  {topic: 'CI / CD and Provisioning', level: PlayerLevel.MIDDLE, question: 'What is the difference between Jenkins and Travis?'}
]

export interface Question {
    topic: string
    level: PlayerLevel
    question: string
}
 
class Questions {

  getRandomQuestion():Question {
    return myQuestions[Math.floor(Math.random() * myQuestions.length)]
  }

  getRandomQuestionLimitedByLevel(level: PlayerLevel):Question {
    let possibleQuestions = myQuestions.filter(question => {
      return question.level === level
    })
    if (possibleQuestions.length === 0) {
      return {level: level, topic: '', question: 'No questions available for this level'};
    }
    return possibleQuestions[Math.floor(Math.random() * possibleQuestions.length)]
  }

}

export default Questions;

