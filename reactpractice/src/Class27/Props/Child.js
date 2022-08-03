import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <h1>
            {this.props.name}
        </h1>
        <p>
            {this.props.price}
        </p>
      </div>
    )
  }
}
