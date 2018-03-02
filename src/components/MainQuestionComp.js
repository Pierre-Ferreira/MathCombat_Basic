import React from 'react'
import PropTypes from 'prop-types'
import QuestionCountdownComp from './QuestionCountdownComp'
import CurrentQuestionComp from './CurrentQuestionComp'

class MainQuestionComp extends React.Component {
  constructor(props) {
    super(props);
  }

  answerSubmitCheck() {
    
  }

  render() {
    return (
      <section  id="main-question-area">
        <QuestionCountdownComp count={3} />
        <CurrentQuestionComp
          questionId={5}
          gameTable={8}
          gameOperator={'x'}
          questionOperand={3}
          correctAnswer={24}
          onSubmitFn={this.answerSubmitCheck}
        />
      </section>
    )
  }
}

export default MainQuestionComp
