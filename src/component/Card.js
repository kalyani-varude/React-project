import React from 'react'

export default function Card(props) {
  return (
    <>
    <div className='card-container'>
    <div className='card'>
      <img className="card-logo" src={props.logo} alt='card-logo'style={{height:"70px", width:"80px"}}/>
      <div className='card-body'>
        <h3 className='card-title'>{props.h}</h3>
        <p className='card-text'>{props.p}</p>
      </div>
    </div>
    </div>
    </>
  )
}
