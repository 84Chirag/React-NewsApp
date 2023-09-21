import React from 'react'
import spinner from './spinner-1s-221px.gif'


const Loading = (props) => {
    return (
      <div className='text-center load'>
        <img src={spinner} alt="loading" className='img-load' style={{background:'transparent !important'}}/>
      </div>
    )
}

export default Loading

