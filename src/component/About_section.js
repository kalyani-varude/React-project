
import React from 'react'
import about_1 from "../Images/about_1.jpg"
import about_2 from "../Images/about_2.jpg"
import about_3 from "../Images/about_3.jpg"
import about_4 from "../Images/about_4.jpg"
export default function About_section() {
  return (
    <>
    <div className='part'>
    <div className='p1'>
      <div className='row1'>
           <div className='im1'><img src={about_1} height={300} width={300} alt='img1'/></div>
           <div className='im2'><img src={about_2} height={250} width={250} alt='img2'/></div>
      </div>
      <div className='row2'>
           <div className='im3'><img src={about_3} height={250} width={250} alt='img3'/></div>
           <div className='im4'><img src={about_4} height={300} width={300} alt='img4'/></div>
      </div>
      </div>
     <div className='p2'>
                <h2 className='paci'>about us -----</h2>
                
                <h1>Welcome to<i class='fa fa-utensils' style={{marginLeft:10, color:"orange"}}></i> Restoran</h1>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.<br/><br/>

                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p><br/><br/>

                <div className='number'>
                <div className='no1'>
                    <h1 style={{color:"orange", fontWeight:"900"}}><b className='line'>|</b> 15</h1><p style={{marginTop:0}}>Years of</p> <h6> EXPERIENCE</h6>
                </div>
                <div className='no2'>
                    <h1 style={{color:"orange", fontWeight:"900"}}><b className='line'>|</b> 50</h1> <p style={{marginTop:0}}>Popular</p> <h6> MASTER CHEFS</h6>
                </div>
                </div><br/>

                <button className='btn'> READ MORE</button>
        </div>
   
        </div>
    </>
  )
}
