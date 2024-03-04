import React, {useState} from 'react'
import i from "../Images/video.jpg"
export default function Videoandform_section() {

  const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[date,setdate]=useState("");
    const[people,setpeople]=useState("");

    let xyz=(e)=>{
      e.preventDefault();
      document.getElementById("s").innerHTML=`Name:${name}`;
      document.getElementById("y").innerHTML=`mobile:${email}`;
      document.getElementById("d").innerHTML=`mobile:${date}`;
      document.getElementById("p").innerHTML=`mobile:${people}`;
    }
  return (
    <div>
      <div className='vdo-form'>
        <div className='vdo'>
            <img src={i} alt='vdo'></img>
      </div>

      <div className='f1'>
        <form onSubmit={xyz}>
        <h2 className='reserve'>Reservation----</h2>
        <h1 className='bk-tbl' style={{marginBottom:20}}>Book A Table Online</h1>




        <div className='nedp'>
        <div className='ne' >
        <div className='na'>
       <input className='n' type='text' placeholder=' Your Name:' value={name} onChange={(e)=>setname(e.target.value)}></input><br/><br/>
        </div>
        <div className='ea'>
        <input className='n' placeholder=' Date & Time:' type='text' value={date} onChange={(e)=>setdate(e.target.value)}></input><br/><br/>
        </div>
        </div>

        <div className='dp' style={{marginLeft:20}}>
        <div className='d'>
       <input className='n' placeholder=' Your Email:' type='text' value={email} onChange={(e)=>setemail(e.target.value)}></input>
       </div>
        <div className='p'>
        <input className="n" placeholder=' No of People:' type='text' style={{marginTop:20}} value={people} onChange={(e)=>setpeople(e.target.value)}></input>
        </div>
        </div>
        </div>

        <div>
          <textarea className='t' placeholder=' Special Request:' style={{height:80, width:520}}></textarea>
          
        </div>

        <button className='btn btn-primary button'>BOOK NOW</button>
        
        <p id="s"></p>
        <p id="y"></p>

        </form>
      </div>
       
       
      </div>
    </div>
  )
}

