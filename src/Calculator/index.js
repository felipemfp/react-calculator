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
    let {history} = this.state;
    let calc = `${this.state.calc} = ${result}`;
    if (calc !== history[0]) {
      history = [
        calc,
        ...history
      ];
    }
    calc = result;
    this.setState({ ...this.state, history, calc });
  }

  clear() {
    let calc = this.state.calc;
    calc = calc.slice(0, calc.length - 1);
    this.setState({ ...this.state, calc });
  }

  render() {
    return (
      <div id="calculator">
        <Display value={this.state.calc} disabled="disabled" />
        <div className="calculator-buttons">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(n => 
            <Button key={n} onClick={this.buttonClick}>{n}</Button>
          )}
        </div>
        <div className="calculator-action-buttons">
          {['+', '-', '*', '/'].map(a => 
            <Button key={a} onClick={this.buttonClick}>{a}</Button>
          )}
          <Button onClick={this.submitCalc}>=</Button>
          <Button onClick={this.clear}>CR</Button>
        </div>
        <div className="clearfix"></div>
        <History history={this.state.history} />
     </div>
   );
  }
}
