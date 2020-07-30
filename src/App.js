import React from 'react';
import ClassicCalculator from './components/ClassicCalculator';
import './App.css';
import './iOsSwitch.css';
import CientificCalculator from './components/CientificCalculator';
import Display from './components/Display';
import ModeSwitch from './components/ModeSwitch';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      result: 0,
      actualNumber: 0,
      previousNumber: 0,
      operation: 0, //1 sum, 2 res, 3 mul, 4 div, 0 not selected
      isFloat: false,
      mode: false //mode true = cientifica / false = normal
    }

    this.buttonPressHandler = this.buttonPressHandler.bind(this);
    this.numericLogic = this.numericLogic.bind(this);
    this.reset = this.reset.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }


  //maneja toda la logica de los botones
  buttonPressHandler(a) {

    this.controls(a);
    this.basicOperations(a);
    this.cientificOperations(a);
    this.mathLogic(a);        //--> ejecuta la logica cuando se presiona '='


  }

  basicOperations = (a) => {
    if (a === '+') {
      if (this.state.operation !== 0) {
        this.setState({ operation: 1, result: 0 });
        return;
      }
      let aux = Number(this.state.result);
      this.setState({
        previousNumber: aux,
        operation: 1,
        isFloat: false,
        result: 0
      });
      return;
    }

    if (a === '-') {
      if (this.state.operation !== 0) {
        this.setState({ operation: 2, result: 0 });
        return;
      }
      let aux = Number(this.state.result);
      this.setState({
        previousNumber: aux,
        operation: 2,
        result: 0,
        isFloat: false
      });
      return;
    }

    if (a === '×') {
      if (this.state.operation !== 0) {
        this.setState({ operation: 3, result: 0 });
        return;
      }
      let aux = Number(this.state.result);
      this.setState({
        previousNumber: aux,
        operation: 3,
        result: 0,
        isFloat: false
      });
      return;
    }
    if (a === '÷') {
      if (this.state.operation !== 0) {
        this.setState({ operation: 4, result: 0 });
        return;
      }
      let aux = Number(this.state.result);
      this.setState({
        previousNumber: aux,
        operation: 4,
        result: 0,
        isFloat: false
      });
      return;
    }

  }

  cientificOperations = (a) => {
    if (a === 'sin') {
      this.setState({ result: Math.sin(this.state.result) });
      return;
    }
    if (a === 'cos') {
      this.setState({ result: Math.cos(this.state.result) });
      return;
    }
    if (a === 'tan') {
      this.setState({ result: Math.tan(this.state.result) });
      return;
    }
    if (a === 'asin') {
      this.setState({ result: Math.asin(this.state.result)});
      return;
    }
    if (a === 'acos') {
      this.setState({ result: Math.acos(this.state.result)});
      return;
    }
    if (a === 'atan') {
      this.setState({ result: Math.atan(this.state.result) });
      return;
    }
    if (a === '√x') {
      this.setState({ result:Math.sqrt(this.state.result)});
      return;
    }
    if (a === '(x)²') {
      this.setState({ result: this.state.result * this.state.result });
      return;
    }
    if (a === 'exp(x)') {
      this.setState({ result: Math.exp(this.state.result) });
      return;
    }

  }

  mathLogic = (a) => {
    if (a === '=') {
      let aux = Number(this.state.result);
      let op;
      switch (this.state.operation) {
        case 1:
          op = this.state.previousNumber + aux;
          break;
        case 2:
          op = this.state.previousNumber - aux;
          break;
        case 3:
          op = this.state.previousNumber * aux;
          break;
        case 4:
          op = this.state.previousNumber / aux;
          break;
        
        case 0:
          op = this.state.result;
          break;
        default:
          op = this.state.result;
          break;
      }

      this.setState({ result: op, operation: 0 });
      return;
    }
  }

  controls = (a) => {
    if (typeof a == 'number') {
      if (this.state.result === Infinity || this.state.result === -Infinity || isNaN(this.state.result) ||this.state.result === 'Error') return;
      this.numericLogic(a);
      return;
    }
    if (a === 'AC') {
      this.reset();
      return;
    }

    if (a === '±') {
      this.setState({ result: this.state.result * -1 });
      return;
    }

    if (a === '%') {
      this.setState({ result: this.state.result / 100 });
      return;
    }
    if (a === '.' && !this.state.isFloat) {
      if (this.state.result === Infinity || this.state.result === -Infinity) return;
      var num = "" + this.state.result + a;

      this.setState({ result: num, isFloat: true });
      return;
    }
  }

  //maneja eventos del switch que controla el modo de la calculadora
  inputHandler() {
    this.setState({ mode: !this.state.mode });
  }


  //resets state of calculator
  reset() {
    this.setState({
      result: 0,
      actualNumber: 0,
      previousNumber: 0,
      isFloat: false
    });
  }

  numericLogic(a) {

    if (a !== 0 && this.state.result === 0) {
      this.setState({ result: a })
    } else if (a === 0 && this.state.result === 0) {

    } else {
      var num = "" + this.state.result + a;
      this.setState({ result: num });
    }

  }

  render() {
    return (
      <div className="App">
        <ModeSwitch handler={this.inputHandler} checked={this.state.mode} />

        <Display result={this.state.result} />

        <div className="margin">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CientificCalculator handler={this.buttonPressHandler} render={this.state.mode} />
            <ClassicCalculator handler={this.buttonPressHandler} />
          </div>
        </div>


      </div>
    );
  }
}

export default App;
