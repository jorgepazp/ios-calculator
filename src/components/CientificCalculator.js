import React from 'react'

export default class CientificCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            division: false,
            suma: false,
            resta: false,
            multiplicacion: false,
            delayedRender: false
        }
        this.animation = null;
    }

    componentDidUpdate(prevProps){
        if(this.props.render !== prevProps.render){
            this.animation= setTimeout(() => {
                this.setState({delayedRender:this.props.render});
            }, 250);
        }
    }

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flex: this.props.render ? 1 : 0,
                    transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s',
                    
                    
                }}>
                <div style={{ display: this.state.delayedRender ? 'flex':'none' ,flexDirection:'column',flexGrow:1}}>
                <div className="row">
          
          <div onClick = {()=>this.props.handler("sen")} className="btn  text">sen</div>
          <div onClick = {()=>this.props.handler("cos")} className="btn text">cos</div>
          <div onClick = {()=>this.props.handler("tan")} className="btn text ">tan</div>
          </div>
          <div className="row">  
          <div onClick = {()=>this.props.handler("asen")} className="btn  text">asen</div>
          <div onClick = {()=>this.props.handler("acos")} className="btn text">acos</div>
          <div onClick = {()=>this.props.handler("atan")} className="btn text ">atan</div>
          </div>
          <div className="row">
          
          <div onClick = {()=>this.props.handler("√x")} className="btn  text">√x</div>
          <div onClick = {()=>this.props.handler("(x)²")} className="btn text">(x)²</div>
          <div onClick = {()=>this.props.handler("exp(x)")} className="btn text ">exp(x)</div>
          </div>
              </div>
            </div>
        )
    }
}
