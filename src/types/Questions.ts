const myQuestions = [
    {topic: "CI / CD and Provisioning", level: "Junior", question: "What is a pipeline?"},
    {topic: "Database", level: "Junior", question: "Can you exlain the n+1 problem?"},
    {topic: "Testing & Test Automation", level: "Junior", question: "Can you exlain the testing pyramid?"},
    {topic: "Testing & Test Automation", level: "Junior", question: "What is TDD?"},
    {topic: "Testing & Test Automation", level: "Middle", question: "What are TestContainers?"},
    {topic: "CI / CD and Provisioning", level: "Middle", question: "What is the difference between Jenkins and Travis?"}
]

export interface Question {
    topic: string
    level: string
    question: string
}

class Questions {

    getRandomQuestion() {
        return myQuestions[Math.floor(Math.random() * myQuestions.length)]
    }

    getRandomQuestionLimitedByLevel(level: string) {
        let possibleQuestions = myQuestions.filter(question => {
            return question.level === level
        })
        if (possibleQuestions.length === 0) {
            return {level: level, topic: "", question: "No questions available for this level"};
        }
        return possibleQuestions[Math.floor(Math.random() * possibleQuestions.length)]
    }

}

export default Questions;

