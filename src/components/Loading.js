import React, { Component } from 'react'
import spinner from './spinner-1s-221px.gif'


export class Loading extends Component {
  render() {
    return (
      <div className='text-center load'>
        <img src={spinner} alt="loading" className='img-load' />
      </div>
    )
  }
}

export default Loading

