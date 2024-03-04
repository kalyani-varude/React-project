import React from 'react';
import Chef_card from './Chef_card';
import Chef_cardarray from "./Chef_cardarray";
export default function Team_members() {
  return (
    <div>
        <div className='team-members'>
        <div className='menu container'>
        <div className='menu1'>
      <h2 className="paci2">------Team members------</h2>
      </div>
      <div className='menu2'>
      <h1 className='famous'>Our Master Chef</h1>
      </div>
        </div>

    </div>


        <Chef_card l={Chef_cardarray[0].image} heading={Chef_cardarray[0].ttl} text={Chef_cardarray[0].t}/>

        <Chef_card l={Chef_cardarray[1].image} heading={Chef_cardarray[1].ttl} text={Chef_cardarray[1].t}/>

        <Chef_card l={Chef_cardarray[2].image} heading={Chef_cardarray[2].ttl} text={Chef_cardarray[2].t}/>

        <Chef_card l={Chef_cardarray[3].image} heading={Chef_cardarray[3].ttl} text={Chef_cardarray[3].t}/>
    </div>
  )
}
