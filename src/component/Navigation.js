import React from 'react'
// import logo from "./logo.png";
// import b from "./Images/"
export default function Navigation() {
  return (
    <div>
      <nav className='container'>

      <div className='heading'><h1><i class='fa fa-utensils me'></i> Restoran</h1></div>

    

          <ul>
            <li href="#" style={{color:"orange"}}>HOME</li>
            <li href="#">ABOUT</li>
            <li href="#">SERVICE</li>
            <li href="#">MENU</li>
            <li href="#">PAGES</li>
            <li href="#">CONTACT</li>
            <button className='button'>BOOK A TABLE</button>
          </ul>
          </nav>
    </div>
  )
}
