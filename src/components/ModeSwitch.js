import React, { Component } from 'react'

export default class ModeSwitch extends Component {
    render() {
        return (
            <div className="absolute-center">
                <label className="form-switch">
                    <input type="checkbox"
                        name="mode"
                        checked={this.props.mode}
                        onChange={this.props.handler} />
                    <i></i>
                    <span style={{ color: "#c1c1c1" ,fontSize:"10pt",fontWeight:'500'}}>MODO CIENTÍFICO</span>
                </label>
            </div>
        )
    }
}
