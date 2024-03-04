import React, { useState } from 'react'

export default function Controlform() {
    const[name,setname]=useState("");
    const[email,setemail]=useState("");

    let xyz=(e)=>{
        e.preventDefault();
        document.getElementById("s").innerHTML=`Name=${name}`;
        document.getElementById("y").innerHTML=`Email=${email}`;
    }
    
  return (
    <div>
        <div className='f1'>
      <form onSubmit={xyz}>
        <div className='reserve'>Reservation</div>
        <h1>Book A Table Online</h1>
        Name:<input type='text' value={name} onChange={(e)=>setname(e.target.value)}></input><br/><br/>
        Email:<input type='text' value={email} onChange={(e)=>setemail(e.target.value)}></input>
        <input type='submit'/>
        <p id="s"></p>
        <p id="y"></p>
      </form>
      </div>
    </div>
  )
}
