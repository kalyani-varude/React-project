

import React from 'react'
import "./component/Header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navigation from './component/Navigation';
import Middle_section from './component/Middle_section';
import Card from './component/Card';
import Cardarray from "./component/Cardarray";
import About_section from "./component/About_section";
import Food_menu from './component/Food_menu';
import Videoandform_section from './component/Videoandform_section';
import Team_members from './component/Team_members';
export default function App() {
  return( 
    <>
      <Navigation/>
      <Middle_section/>
      

      <div className='card-content'>
      <Card logo={Cardarray[0].i} h={Cardarray[0].title} p={Cardarray[0].para}/>

      <Card logo={Cardarray[1].i} h={Cardarray[1].title} p={Cardarray[1].para}/>

      <Card logo={Cardarray[2].i} h={Cardarray[2].title} p={Cardarray[2].para}/>

      <Card logo={Cardarray[3].i} h={Cardarray[3].title} p={Cardarray[3].para}/>
    </div>

    <About_section/>
    <Food_menu/>
    <Videoandform_section/>
    <Team_members/>
    {/* <Controlform/>
     */}
    </>
  )
}



