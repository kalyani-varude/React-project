import React from 'react'
import hero from "./hero.png";
import s from "./blur-bk.jpg";

export default function Middle_section() {
  return (
    
    <div className='bk-img'>

      <div className='middle_section container'>
      <div className='middle_containt'>
        <h1>Enjoy Our <br/> Delicious Meal</h1>
        <p>lorem ipsum Tempor erat elitr rebum at clita.Diam dolor diam ipsum sit.Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat ametdt hlorem ipsum disijfd</p><br/>
        <div><button className='btn'>BOOK A TABLE</button></div>
      </div>
      <div className='middle_image'><img src={hero} alt='food image' style={{height:"612px"}}></img></div>
    </div>

    </div>
  )
}
