import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Question.css';
import { createBrowserHistory } from 'history';


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreboard: 0,
      count: 0,
      validationInProgress: false,
      data: props.data,
      correctResponse: {
        0: false,
        1: false,
        2: false,
        3: false
      },
      changeParentState: props.changeParentState
    };

    this.changeQuestion = this.changeQuestion.bind(this);
  }

  goToWrongPage() {
    const history = createBrowserHistory();
    history.push('/wrong-response');
    history.go();
  }

  goToWinnerPage() {
    const history = createBrowserHistory();
    history.push('/winner');
    history.go(); 
  }

  changeQuestion() {
    const nextQuestion = this.state.count + 1;
    const lastRound = this.state.data.length;

    if(nextQuestion >= lastRound ) {
     return this.goToWinnerPage();
    }

    this.setState({
      count: nextQuestion,
      validationInProgress: false
    });
  }

  clearResponse({ index }) {
    const correctResponse = this.state.correctResponse;
    this.props.changeParentState(null, 'initial');
    correctResponse[index] = false;

    this.setState({
      correctResponse: correctResponse
    });
  }

  formatRound() {
    const roundOne = [0,1,2,3,4]; //mil reais
    const roundTwo = [5,6,7,8,9]; // 10 mil
    const rountThird = [10,11,12,13,14] //100 mil
    const roundFour = [15]; // 1 milhão
    
    const questionNumber = this.state.count;

    const roundIndex = [roundOne, roundTwo, rountThird, roundFour].findIndex((array) => {
      return array.indexOf(questionNumber) > -1;
    });

    const questionValue = {
      0: 1000,
      1: 10000,
      2: 100000,
      3: 445000
    }[roundIndex];

    return {
      round: roundIndex,
      questionValue
    }
  }

  setScore(value) {
    this.setState({ scoreboard: this.state.scoreboard += value });
  }

  changeReaction(isValid, initial) {
    const { round, questionValue } = this.formatRound();
    const reaction = initial ? 0 : round; 

    if(isValid) {
      this.setScore(questionValue);

      return this.props.changeParentState(round, 'valid');
    }

    return this.props.changeParentState(round, 'invalid');
  }

  validResponse({ isCorrect }, event) {
    if (this.state.validationInProgress) {
      return null;
    }

    const index = this.state.data[this.state.count].choices
      .findIndex(choice => choice.isCorrect === true);

    const correctResponse = this.state.correctResponse;

    correctResponse[index] = true;

    this.setState({
      correctResponse: correctResponse,
      validationInProgress: true
    });

    this.changeReaction(isCorrect);

    setTimeout(() => {
      this.clearResponse({ index });

      if (isCorrect) {
        return this.changeQuestion();
      }

      return this.goToWrongPage();
    }, 3000);
  }

  formatCurrency() {
    const score = this.state.scoreboard;

    if(!score) {
      return '0';
    }

    if(score === 1000000) {
      return '1 MILHÃO';
    }

    const currency = String(score).slice(0, -3);

    return `${currency} MIL`;
  }

  render() {
    if (this.state.data) {
      return (
        <List component="nav" aria-label="contacts">
          <div className="Question">
            <div className='Content'>
              {this.state.data[this.state.count].question}
            </div>
          </div>

          <div className="content">
            {this.state.data[this.state.count].choices.map((choice, indice) => {
              return (<ListItem button>
                <ListItemText
                  onClick={() => this.validResponse({ ...choice }, event)}
                  className={`Choices 
                    ${ this.state.correctResponse[indice] ? 'Success' : ''}`
                  }
                  inset primary={indice + 1} secondary={choice.response} />
              </ListItem>)
            })}
            <div className='CurrentValue'>
              <div className='Box'>
                {this.formatCurrency()}
              </div>
            </div>
          </div>
        </List>
      )
    }
    return (<div>carregando</div>)
  }
}

export default Question;