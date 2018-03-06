import React from 'react';
import PropTypes from 'prop-types';
import IntegerInputComp from './IntegerInputComp';
import './GameSettingsComp.css';

class GameSettingsComp extends React.Component {
  constructor(props) {
    super(props);
    this.hangleGameSettingsSubmit = this.hangleGameSettingsSubmit.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
    this.handleOperatorChange = this.handleOperatorChange.bind(this);
    this.handleQuestionTimeChange = this.handleQuestionTimeChange.bind(this);
    this.state = {
      gameTable: 10,
      gameOperator: 'x',
      gameQuestionTime: 7,
    };
  }
  handleTableChange(e) {
    this.setState({ gameTable: e.target.value });
  }
  handleOperatorChange(e) {
    this.setState({ gameOperator: e.target.value });
  }
  handleQuestionTimeChange(e) {
    this.setState({ gameQuestionTime: e.target.value });
  }
  hangleGameSettingsSubmit(e) {
    e.preventDefault();
    const gameNoOfQuestions = 20;
    const { gameTable, gameOperator, gameQuestionTime } = this.state;
    this.props.clearGame();
    this.props.saveGameSettings(gameNoOfQuestions, gameTable, gameOperator, gameQuestionTime);
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
                  onChange={this.handleOperatorChange}
                  value={this.state.gameOperator}
                >
                  <optgroup label="Maal">
                    <option>x</option>
                  </optgroup>
                  <optgroup label="Deel">
                    <option>÷</option>
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

export default GameSettingsComp;
