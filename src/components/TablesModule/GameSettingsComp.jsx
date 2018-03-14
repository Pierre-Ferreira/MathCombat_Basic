import React from 'react';
import PropTypes from 'prop-types';
import IntegerInputComp from './IntegerInputComp';
import './GameSettingsComp.css';

class GameSettingsComp extends React.Component {
  constructor(props) {
    super(props);
    this.hangleGameSettingsSubmit = this.hangleGameSettingsSubmit.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
    this.handleGameTypeChange = this.handleGameTypeChange.bind(this);
    this.handleQuestionTimeChange = this.handleQuestionTimeChange.bind(this);
    this.state = {
      gameTable: 10,
      gameType: 'plain_multiplication',
      gameQuestionTime: 6,
    };
  }
  handleTableChange(e) {
    this.setState({ gameTable: e.target.value });
  }
  handleGameTypeChange(e) {
    this.setState({ gameType: e.target.value });
  }
  handleQuestionTimeChange(e) {
    this.setState({ gameQuestionTime: e.target.value });
  }
  hangleGameSettingsSubmit(e) {
    e.preventDefault();
    const gameNoOfQuestions = 20;
    const { gameTable, gameType, gameQuestionTime } = this.state;
    this.props.clearGame();
    this.props.saveGameSettings(gameNoOfQuestions, gameTable, gameType, gameQuestionTime);
    this.props.startGame();
  }
  render() {
    return (
      <section id="game-settings-area">
        <form onSubmit={this.hangleGameSettingsSubmit}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 offset-lg-3 offset-md-2">
                <label>Tafel</label>
                <select
                  className="selectpicker"
                  onChange={this.handleTableChange}
                  value={this.state.gameTable}
                >
                  <optgroup label="Gemeng">
                    <option value="all">0 - 12</option>
                  </optgroup>
                  <optgroup label="Tafel">
                    <option>12</option>
                    <option>11</option>
                    <option>10</option>
                    <option>9</option>
                    <option>8</option>
                    <option>7</option>
                    <option>6</option>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                    <option>0</option>
                  </optgroup>
                </select>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4">
                <label>x of ÷</label>
                <select
                  className="selectpicker"
                  onChange={this.handleGameTypeChange}
                  value={this.state.gameType}
                >
                  <optgroup label="Maal">
                    <option value="plain_multiplication">x</option>
                  </optgroup>
                  <optgroup label="Deel">
                    <option value="plain_division">÷</option>
                  </optgroup>
                  <optgroup label="Gemeng">
                    <option value="mixed_multiplication_division">x && ÷</option>
                  </optgroup>
                </select>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4">
                <label>Tyd/Q</label>
                <select
                  className="selectpicker"
                  onChange={this.handleQuestionTimeChange}
                  value={this.state.gameQuestionTime}
                >
                  <optgroup label="Yawn..">
                    <option>10</option>
                    <option>9</option>
                    <option>8</option>
                  </optgroup>
                  <optgroup label="Okayish">
                    <option>7</option>
                    <option>6</option>
                    <option>5</option>
                  </optgroup>
                  <optgroup label="Nogal tough">
                    <option>4</option>
                    <option>3</option>
                  </optgroup>
                  <optgroup label="Baie tough">
                    <option>2</option>
                  </optgroup>
                  <optgroup label="Superhero!!">
                    <option>1</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-center">
                <button type="submit" className="btn btn-info btn-lg btn-custom" disabled={this.props.gameStartButtonDisabled}>
                  {this.props.gameStartButtonText}
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

GameSettingsComp.propTypes = {
  // gameNoOfQuestions: PropTypes.number,
  // numberOfCorrect: PropTypes.number,
  // gameTable: PropTypes.number,
  // gameQuestionTime: PropTypes.number,
  // currentAnswer: PropTypes.number,
  // saveAnswerInfo: PropTypes.func.isRequired,
  // saveGameScore: PropTypes.func.isRequired,
  // updateCurrentAnswer: PropTypes.func.isRequired,
  // endGame: PropTypes.func.isRequired,
};

export default GameSettingsComp;
