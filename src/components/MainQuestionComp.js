import React from 'react';
import PropTypes from 'prop-types';
import QuestionCountdownComp from './QuestionCountdownComp';
// import CurrentQuestionComp from './CurrentQuestionComp'
import CurrentQuestionContainer from '../containers/CurrentQuestionContainer';

class MainQuestionComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
    this.evaluateAnswer = this.evaluateAnswer.bind(this);
    this.generateNewQuestion = this.generateNewQuestion.bind(this);
    this.restartTimer = this.restartTimer.bind(this);
    this.tick = this.tick.bind(this);
    const gameQuestionTime = 4;
    this.state = {
      timerCount: gameQuestionTime,
      gameQuestionTime,
      totalNoOfQuestions: 4,
      questionId: 0,
      gameTable: 8, // SHOULD COME FROM REDUX.
      gameOperator: 'x', // SHOULD COME FROM REDUX.
      questionOperand1: '',
      questionOperand2: '',
      correctAnswer: '',
    };
  }

  componentDidMount() {
    // componentDidMount is called by react when the component
    // has been rendered on the page. We can set the interval here:
    this.timer = setInterval(this.tick, 100);
    // Generate a question.
    this.generateNewQuestion();
  }

  componentWillUnmount() {
    // This method is called immediately before the component is removed
    // from the page and destroyed. We can clear the interval here:
    clearInterval(this.timer);
  }

  tick() {
    // This function is called every 500 ms. It updates the timerCount.
    // Calling setState causes the component to be re-rendered
    const timerCount = this.state.gameQuestionTime - Math.trunc((new Date() - this.startTime) / 1000);
    // console.log(this.gameQuestionTime)
    // console.log(timerCount)
    this.setState({ timerCount });
    if (timerCount <= 0) {
      this.evaluateAnswer();
    }
  }

  evaluateAnswer() {
    // Check if the answer is correct.
    if (this.state.correctAnswer === this.props.currentAnswer) {
      console.log('CORRECT');
    } else {
      console.log('INCORRECT');
    }
    // Generate a new question.
    this.generateNewQuestion();
  }

  generateNewQuestion() {
    // Check if more questions need to be asked.
    if (this.state.questionId < this.state.totalNoOfQuestions) {
      // Create a multiplication question. (THIS NEEDS TO BE A FUNCTION THAT CAN HANDLE DIVIDE, PLUS, MINUS, ETC)
      // Generate a random number between 0 and 12.
      const lowerLimit = 0;
      const upperLimit = 12;
      const randomNum = Math.floor(Math.random() * ((upperLimit - lowerLimit) + 1)) + lowerLimit;
      const correctAnswer = randomNum * this.state.gameTable;
      this.setState({ correctAnswer });

      const randomSwap = Math.floor(Math.random() * 2);
      if (randomSwap) {
        this.setState({ questionOperand1: this.state.gameTable });
        this.setState({ questionOperand2: randomNum });
      } else {
        this.setState({ questionOperand1: randomNum });
        this.setState({ questionOperand2: this.state.gameTable });
      }

      this.setState({ questionId: this.state.questionId + 1 });
      // Restart the timer.
      this.restartTimer();
    } else {
      //
      clearInterval(this.timer);
    }
  }

  restartTimer() {
    // Set the start time.
    this.startTime = new Date();
  }

  handleAnswerSubmit(e) {
    e.preventDefault();
    // Get the answer from the REDUX store.
    this.evaluateAnswer()
  }

  render() {
    return (
      <section  id="main-question-area">
        <QuestionCountdownComp timerCount={this.state.timerCount} />
        <CurrentQuestionContainer
          questionId={this.state.questionId}
          questionOperand1={this.state.questionOperand1}
          gameOperator={this.state.gameOperator}
          questionOperand2={this.state.questionOperand2}
          onSubmitFn={this.handleAnswerSubmit}
        />
      </section>
    )
  }
}

export default MainQuestionComp
