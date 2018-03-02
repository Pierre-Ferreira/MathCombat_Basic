import React from 'react'
import PropTypes from 'prop-types'
import IntegerInputComp from './IntegerInputComp'
import './CurrentQuestionComp.css'

const CurrentQuestionComp = (props) => {
  const feedbackStyle = {
    fontSize: 'small'
  }
  return (
    <section  id="current-question-area">
      <form onSubmit={props.onSubmitFn}>
        <div className="container">
          <div className="row">
            <div className="col-sm-1 col-sm-offset-1"></div>
            <div className="col-sm-2">{props.questionId})</div>
            <div className="col-sm-1">{props.gameTable}</div>
            <div className="col-sm-1">{props.gameOperator}</div>
            <div className="col-sm-1">{props.questionOperand}</div>
            <div className="col-sm-1">=</div>
              <div className="col-sm-2">
                <IntegerInputComp
                  feedbackStyle={feedbackStyle}
                />
              </div>
          </div>
        </div>
      </form>
    </section>
  )
}

CurrentQuestionComp.propTypes = {
  questionId: PropTypes.number.isRequired,
  gameTable: PropTypes.number.isRequired,
  gameOperator: PropTypes.string.isRequired,
  questionOperand: PropTypes.number.isRequired,
  onSubmitFn: PropTypes.func.isRequired
}



export default CurrentQuestionComp
