import React from 'react'
import Food_menu2 from './Food_menu2'
import Food_menu2array from './Food_menu2array'
export default function Food_menu() {
  return (
    <>
    <div className='menu container'>
      <div className='menu1'>
      <h2 className="paci2">------food menu------</h2>
      </div>
      <div className='menu2'>
      <h1 className='famous'>Most Popular Items</h1>
      </div>
      


    <div className='popular'>

    <div className='breakfast'>
      <a href=' '><i class="fa fa-coffee fa-2x cup"></i>
      
      <div className='sh'>
        <div className='sep'>
      <small className='s'>Popular</small>
      <h6 className='h'>Breakfast</h6>
      </div>
      </div>
      </a>
    </div>

  
    <div className='lunch'>
      <a href='#'><i class="fa fa-hamburger fa-2x cup"></i>
      <div className='sh'>
      <div className='sep'>
      <small className='s'>Special</small>
      <h6 className='h'> Launch</h6>
      </div>
      </div>
      </a>
      
    </div>

    <div className='dinner'>
      <a href='#'><i class="fa fa-utensils fa-2x cup"></i>
      <div className='sh'>
      <div className='sep'>
      <small className='s'>Lovely</small>
      <h6 className='h'> Dinner</h6>
      </div>
      </div>
      </a>
    </div>
    </div>


    <div className='food-column'>
    <div className='food-content1'>
    <Food_menu2 logo={Food_menu2array[0].i} h={Food_menu2array[0].title} p={Food_menu2array[0].para}/>

    <Food_menu2 logo={Food_menu2array[1].i} h={Food_menu2array[1].title} p={Food_menu2array[1].para}/>

    <Food_menu2 logo={Food_menu2array[2].i} h={Food_menu2array[2].title} p={Food_menu2array[2].para}/>

    <Food_menu2 logo={Food_menu2array[3].i} h={Food_menu2array[3].title} p={Food_menu2array[3].para}/>
    </div>
    <div className='food-content2'>
    <Food_menu2 logo={Food_menu2array[4].i} h={Food_menu2array[4].title} p={Food_menu2array[4].para}/>

    <Food_menu2 logo={Food_menu2array[5].i} h={Food_menu2array[5].title} p={Food_menu2array[5].para}/>

    <Food_menu2 logo={Food_menu2array[6].i} h={Food_menu2array[6].title} p={Food_menu2array[6].para}/>

    <Food_menu2 logo={Food_menu2array[7].i} h={Food_menu2array[7].title} p={Food_menu2array[7].para}/>
    </div>
    </div>

</div>

  </>
  )
}
