import React, { Component } from 'react';
import {tableStyle, buttonStyle, getColStyle, getRandomData} from './utils';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      data: getRandomData(),
      nextItem: 1,
      gameStarted: false,
      won: false,
      score: 0
    };
    this.onClick = this.onClick.bind(this);
    this.onGameOver = this.onGameOver.bind(this);
  }

  onGameOver() {
    this.setState({
      data: getRandomData(),
      nextItem: 1,
      gameStarted: false,
      won: false,
      score: 0
    });
  }

  onClick(event) {
    const {nextItem, gameStarted, score, data, won} = this.state;
    const id = parseInt(event.target.id);
    const item = data[id];

    if(won) {
      return;
    }

    if(nextItem === 1 && item === 1) {
      this.setState({nextItem: nextItem + 1, gameStarted: true, score: 11});
    }
    if(nextItem === 9 && item === 9) {
      this.setState({won: true, score: 100});
      return;
    }
    if(nextItem === item) {
      this.setState({nextItem: nextItem + 1, score: score + 11})
    }
    if(nextItem !== item) {
      this.onGameOver();
    }
  }


  render() {

    const {data, nextItem, gameStarted, won, score} = this.state;
    const {onClick, onGameOver} = this;
    //console.log(data);

    const rows = [];
    for(var i = 0; i < 3; i++) {
      const cols = [];
      for(var j = 0; j < 3; j++) {
        const id = 3*i + j;
        cols.push(<td id={id} onClick={onClick} style={getColStyle(nextItem, data[id], won)}>{data[id]}</td>);
      }
      rows.push(<tr>{cols}</tr>);
    }

    return (
        <div>
          {won && <p style={{textAlign: 'center', color: 'blue', fontWeight: 'bold'}}>Congratualtions!! You won the Game</p>}
          <p style={{paddingLeft: '40%'}}>Score is {score}</p>
          <table style={tableStyle}>
            <tbody>{rows}</tbody>
          </table>
          <button style={buttonStyle} onClick={onGameOver}>Reset</button>
        </div>
    );
  }
}
