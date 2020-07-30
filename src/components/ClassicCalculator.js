import React from 'react';
import '../App.css';

export default class ClassicCalculator extends React.Component {
   
    constructor(props){
        super(props);
        this.action = this.action.bind(this);
        this.state ={
            division:false,
            suma:false,
            resta:false,
            multiplicacion:false
        }
    }

    action = (a) =>{
        this.props.handler(a);
        if(a === '÷'){
            this.setState({division:true,suma:false,resta:false,multiplicacion:false});
        }else if(a === '×'){
            this.setState({division:false,suma:false,resta:false,multiplicacion:true});
        }else if(a === '+'){
            this.setState({division:false,suma:true,resta:false,multiplicacion:false});
        }else if (a ==='-'){
            this.setState({division:false,suma:false,resta:true,multiplicacion:false});
        }else if (a ==='AC') this.setState({division:false,suma:false,resta:false,multiplicacion:false});
        else if ( a ==="=") this.setState({division:false,suma:false,resta:false,multiplicacion:false});
    }

    render(){
        var sum = this.state.suma ? "reverse-orange":"";
        var res = this.state.resta? "reverse-orange":"";
        var mul = this.state.multiplicacion? "reverse-orange":"";
        var div = this.state.division? "reverse-orange":"";

        return(
            <div style={{flex:1,transition:'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s',overflow:'hidden'}}>
        <div className="row">
          <div onClick = {()=>this.action("AC")} className="btn light text ">AC</div>
          <div onClick = {()=>this.action("±")} className="btn light text">&plusmn;</div>
          <div onClick = {()=>this.action("%")} className="btn light text">%</div>
          <div onClick = {()=>this.action("÷")} className={`btn orange text ${div}`}>÷</div>
          </div>
          <div className="row">
          <div onClick = {()=>this.action(7)} className="btn text ">7</div>
          <div onClick = {()=>this.action(8)} className="btn text">8</div>
          <div onClick = {()=>this.action(9)} className="btn text">9</div>
          <div onClick = {()=>this.action("×")} className={`btn orange text ${mul}`}>×</div>
          </div>
          <div className="row">
          <div onClick = {()=>this.action(4)} className="btn text">4</div>
          <div onClick = {()=>this.action(5)} className="btn text">5</div>
          <div onClick = {()=>this.action(6)} className="btn text">6</div>
          <div onClick = {()=>this.action("+")} className={`btn orange text ${sum}`}>+</div>
          </div>
          <div className="row">
          <div onClick = {()=>this.action(1)}className="btn text">1</div>
          <div onClick = {()=>this.action(2)}className="btn text">2</div>
          <div onClick = {()=>this.action(3)}className="btn text">3</div>
          <div onClick = {()=>this.action("-")}className={`btn orange text ${res}`}>-</div>
          </div>
          <div className="row">
          
          <div onClick = {()=>this.action(0)} className="btn large text">0</div>
          <div onClick = {()=>this.action(".")} className="btn text">.</div>
          <div onClick = {()=>this.action("=")} className="btn text orange">=</div>
          </div>
          </div>
        );
    }
}