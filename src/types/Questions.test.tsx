import {IQuestion, Questions} from './Questions';

const questions_data: IQuestion[] = [{
  topic_id: 1,
  level_id: 0,
  question: 'test question'
},
{
  topic_id: 1,
  level_id: 0,
  question: 'test question 2'
},
{
  topic_id: 1,
  level_id: 1,
  question: 'test question 3'
},
{
  topic_id: 2,
  level_id: 1,
  question: 'test question 4'
}];

it('check remaining questions', () => {
  const questions = new Questions(questions_data);
  expect(questions.getRemainingQuestions()).toBe(4);
});


it('check getAvailableTopics', () => {
  const questions = new Questions(questions_data);
  expect(questions.getAvailableTopics(0)).toStrictEqual([1,2]);
});


it('check immutability', () => {
  const questions = new Questions(questions_data);
  let questions2 = questions.selectNextQuestion(1,1);
  expect(questions2.getRemainingQuestions()).toBe(questions.getRemainingQuestions() -1 );
});


it('should have a lot of questions', () => {
  const questions = Questions.createInstance();
  expect(questions.getRemainingQuestions()).toBeGreaterThan(30);
  expect(questions.getAvailableTopics(0).length).toBe(3);
});

