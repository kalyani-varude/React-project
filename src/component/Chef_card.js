import React from 'react'

export default function Chef_card(props) {
  return (
    <div>
      <div className='card-container'>
    <div className='card'>
      <img className="card-logo" src={props.l} alt='card-image'style={{height:"70px", width:"80px"}}/>
      <div className='card-body'>
        <h3 className='card-title'>{props.heading}</h3>
        <p className='card-text'>{props.text}</p>
      </div>
    </div>
    </div>
    </div>
  )
}
