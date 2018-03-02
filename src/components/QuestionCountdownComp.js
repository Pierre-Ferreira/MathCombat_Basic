import React from 'react'
import PropTypes from 'prop-types'


const QuestionCountdownComp = (props) => {
  return (
    <section id="question-countdown-area">
      <div>Countdown: {props.count}</div>
    </section>
  )
}

QuestionCountdownComp.propTypes = {
  // count: PropTypes.string.isRequired
}

QuestionCountdownComp.defaultProps = {
  count: 'N/A'
}
export default QuestionCountdownComp
