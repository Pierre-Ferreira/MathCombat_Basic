import React from 'react'
import PropTypes from 'prop-types'

class IntegerInputComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      inputValue : "",
      feedBackMsg: ""
    };
  }

  handleOnChange(e) {
    // Reset the feedback message.
    this.setState({feedBackMsg: ""});
    // Trim the input value.
    let newText = (e.target.value).trim();
    // let newInteger = this.state.inputValue;
    let negativeInt = false;
    // Check if the value is negative.
    if (newText[0] === '-') {
      negativeInt = true;
      newText = newText.slice(1);
      if (newText.lenght === 0) {
        this.setState({inputValue : '-'});
      }
    }
    // Check if the text is a number.
    if (!isNaN(newText) && newText.lenght !== 0) {
      newText = (newText === '') ? '' : Math.trunc(newText);
      // Replace the minus sign if needed.
      if (negativeInt) {
        newText = '-' + newText
      }
      // Check if value is bigger than min value.
      const minValue = (this.props.minValue) ? this.props.minValue : Number.NEGATIVE_INFINITY
      if (newText < minValue && newText.length !== 0) {
        this.setState({feedBackMsg: `Getal moet '${minValue}' of groter wees!`});
      }
      // Check if value is smaller than max value.
      const maxValue = (this.props.maxValue) ? this.props.maxValue : Number.POSITIVE_INFINITY
      if (newText > maxValue && newText.length !== 0) {
        this.setState({feedBackMsg: `Getal moet '${maxValue}' of kleiner wees!`})
      }
      // Set the state with the new value.
      this.setState({inputValue : newText});
    } else {
      this.setState({feedBackMsg: "Net getalle, Doofus!"})
    }
  }

  render() {
    return (
      <div className = "">
        <div className = "">
          <div className = "">
            <label className = ""> {this.props.title}</label>
          </div>
          <div>
            <input
              id="inputlg"
              className = "form-input"
              name = {this.props.name}
              type = "text"
              value = {this.state.inputValue}
              onChange = {this.handleOnChange}
            />
          </div>
          <div>
            {this.state.feedBackMsg}
          </div>
        </div>
      </div>
    )
  }
}

IntegerInputComp.PropTypes = {

}

IntegerInputComp.defaultProps = {
  name: 'Stranger'
};

export default IntegerInputComp
