import React from 'react'

export default function Food_menu2(props) {
  return (
    <div>



    <div className='food-container'>
        <div className='food-column'>
    <div className='food'>
      <img className="food-logo" src={props.logo} alt='food-logo'/>
      <div className='food-body'>
        <h3 className='food-title'>{props.h}</h3>
        <i className='food-text'>{props.p}</i>
      </div>
      <h2 className='num' style={{color:"orange", marginLeft:150}}>$115</h2>
    </div>
    </div>
    </div>




    </div>
  )
}
