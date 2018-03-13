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
      gameUpperRangeLimit: 30,
      gameType: '+',
      gameQuestionTime: 7,
    };
  }
  handleTableChange(e) {
    this.setState({ gameUpperRangeLimit: e.target.value });
  }
  handleOperatorChange(e) {
    this.setState({ gameType: e.target.value });
  }
  handleQuestionTimeChange(e) {
    this.setState({ gameQuestionTime: e.target.value });
  }
  hangleGameSettingsSubmit(e) {
    e.preventDefault();
    const gameNoOfQuestions = 20;
    const { gameUpperRangeLimit, gameType, gameQuestionTime } = this.state;
    this.props.clearGame();
    this.props.saveGameSettings(gameNoOfQuestions, gameUpperRangeLimit, gameType, gameQuestionTime);
    this.props.startGame();
  }
  render() {
    return (
      <section id="game-settings-area">
        <form onSubmit={this.hangleGameSettingsSubmit}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 offset-lg-3 offset-md-2">
                <label>+ of -</label>
                <select
                  className="selectpicker"
                  onChange={this.handleOperatorChange}
                  value={this.state.gameType}
                >
                  <optgroup label="Optel">
                    <option>+</option>
                  </optgroup>
                  <optgroup label="Aftrek">
                    <option>-</option>
                  </optgroup>
                  <optgroup label="Gemeng">
                    <option>+ && -</option>
                  </optgroup>
                </select>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4">
                <label>Tafel</label>
                <select
                  className="selectpicker"
                  onChange={this.handleTableChange}
                  value={this.state.gameUpperRangeLimit}
                >
                  <optgroup label="Bo Limiet">
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>30</option>
                    <option>50</option>
                    <option>100</option>
                    <option>1000</option>
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
