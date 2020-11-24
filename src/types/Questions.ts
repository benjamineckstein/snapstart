import {shuffle, uniq, clone} from 'lodash';
import {topic_questions} from '../data/data_questions';


export interface IQuestion {
  topic_id: number,
  level_id: number,
  question: string
}


export class Questions {

  questions: IQuestion[];

  selectedQuestion: IQuestion;


  constructor(questions: IQuestion[]) {
    this.questions = questions;
    this.selectedQuestion = questions[0];
  }

  getAvailableTopics = (level: number): number[] => {
    let iQuestions = this.questions.filter(q => q.level_id === level);
    if(iQuestions.length === 0){
      iQuestions = this.questions.filter(q => q.level_id < level);
    }
    if(iQuestions.length === 0){
      iQuestions = this.questions;
    }
    return shuffle(uniq(iQuestions.map(question => question.topic_id))).slice(0, 3).sort();
  }

  getSelectedQuestion = ():IQuestion => {
    return this.selectedQuestion;
  }

  getRemainingQuestions = () => {
    return this.questions.length;
  }

  selectNextQuestion = (level:number, topic_id:number): Questions => {

    let clone = this.clone();
    if(clone.questions.length === 0) {
      clone = Questions.createInstance();
    }
    let findIndex = clone.questions.findIndex(q => q.topic_id === topic_id && q.level_id === level);
    if(findIndex === -1){
      findIndex = clone.questions.findIndex(q => q.topic_id === topic_id && q.level_id < level);
    }
    if(findIndex === -1){
      console.warn('No suitable question was found!');
      findIndex = 0;
    }
    clone.selectedQuestion = clone.questions[findIndex];
    clone.questions.splice(findIndex,1);

    return clone;

  }

  clone = ():Questions => {
    //TODO not so easy to clone class instances with methods
    let questionsClone = new Questions(clone(this.questions));
    questionsClone.selectedQuestion = clone(this.selectedQuestion);
    return questionsClone;
  }

  public static createInstance(): Questions {
    let cloneQuestions = clone(topic_questions);

    console.log('Create Questions Instance');
    console.log(cloneQuestions);

    let questions: IQuestion[] = cloneQuestions.map((data: any) => {
      return {
        topic_id: data[0],
        level_id: data[1],
        question: data[2]
      }
    }
    );

    return new Questions(questions);
  }
}

