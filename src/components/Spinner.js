import React, { Component } from 'react'
import spin from '../Spinner-2.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={spin} alt="loading..." />
      </div>
    )
  }
}

export default Spinner