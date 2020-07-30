import React, { Component } from 'react'

export default class Display extends Component {
    
    render() {
        return (
            <div className="display">
          <div className="displayFont">{isNaN(this.props.result ) ? 'Error':this.props.result }</div>
        </div>
        )
    }
}
