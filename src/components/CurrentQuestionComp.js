import React from 'react'
import PropTypes from 'prop-types'
import IntegerInputComp from './IntegerInputComp'

const CurrentQuestionComp = (props) => {
  return (
    <section  id="current-question-area">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-md-offset-1">{props.questionId})</div>
          <div className="col-md-2">{props.gameTable}</div>
          <div className="col-md-2">{props.gameOperator}</div>
          <div className="col-md-2">{props.questionOperand}</div>
          <div className="col-md-2">=</div>
          <div className="col-md-2">
            <IntegerInputComp />
          </div>
        </div>
      </div>
    </section>
  )
}

CurrentQuestionComp.propTypes = {
  questionId: PropTypes.number.isRequired,
  gameTable: PropTypes.number.isRequired,
  gameOperator: PropTypes.string.isRequired,
  questionOperand: PropTypes.number.isRequired,
  // correctAnswer: PropTypes.number.isRequired,
  onSubmitFn: PropTypes.func.isRequired
}



export default CurrentQuestionComp
