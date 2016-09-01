import React from 'react';
import Display from './Display';
import Button from './Button';
import History from './History';
import autoBind from 'react-autobind';

export default class Calculator extends React.Component {
  constructor(props) {
     super(props);
     autoBind(this);
     this.state = {
        calc: '',
        history: []
     };
  }

  buttonClick(e) {
    const calc = this.state.calc + e.target.innerText;
    this.setState({ ...this.state, calc });
  }

  submitCalc() {
    const result = eval(this.state.calc);
    let calc = `${this.state.calc} = ${result}`;
    const history = [
       ...this.state.history,
       calc
    ];
    calc = result;
    this.setState({ ...this.state, history, calc });
  }

  clear() {
    this.setState({ ...this.state, calc: '' });
  }

  render() {
    return (
      <div id="calculator">
        <Display value={this.state.calc} disabled="disabled" />
        <div className="calculator-buttons">
          <Button onClick={this.buttonClick}>7</Button>
          <Button onClick={this.buttonClick}>8</Button>
          <Button onClick={this.buttonClick}>9</Button>
          <div className="clearfix"></div>

          <Button onClick={this.buttonClick}>4</Button>
          <Button onClick={this.buttonClick}>5</Button>
          <Button onClick={this.buttonClick}>6</Button>
          <div className="clearfix"></div>

          <Button onClick={this.buttonClick}>1</Button>
          <Button onClick={this.buttonClick}>2</Button>
          <Button onClick={this.buttonClick}>3</Button>
          <div className="clearfix"></div>

          <Button onClick={this.buttonClick}>0</Button>
        </div>

        <div className="calculator-action-buttons">
          <Button onClick={this.buttonClick}>+</Button>
          <Button onClick={this.buttonClick}>-</Button>
          <div className="clearfix"></div>

          <Button onClick={this.buttonClick}>*</Button>
          <Button onClick={this.buttonClick}>/</Button>
          <div className="clearfix"></div>

          <Button onClick={this.submitCalc}>=</Button>
          <Button onClick={this.clear}>CR</Button>
          <div className="clearfix"></div>
        </div>
        <div className="clearfix"></div>
        <History history={this.state.history} />
     </div>
   );
  }
}
