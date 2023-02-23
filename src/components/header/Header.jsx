
import React from 'react';
import { Container } from 'reactstrap';

import './header.css';

const navLinks = [
   {
    dispaly:'Home',
    url:'#home'
   },
   {
    dispaly:'About',
    url:'#about'
   },
   {
    dispaly:'Services',
    url:'#services'
   },
   {
    dispaly:'Portfolio',
    url:'#portfolio'
   },
   {
    dispaly:'Contact',
    url:'#contact'
   },
]

const Header = () => {
  

  const handleClick = e=>{
   e.preventDefault()
   const targetAttr = e.target.getAttribute('href')
   const location = document.querySelector(targetAttr).offsetTop

   window.scrollTo({
      left: 0,
      top: location - 70
   })
  }

    return (
    <header className="header">
    <Container>
       <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5>Alina</h5>
         </div>

       <div className="nav_menu">
         <ul className="nav_list">

            {navLinks.map((item,index)=> (
                <li className="nav_item" key={index}>
                <a href={item.url} onClick={handleClick}
                >{item.dispaly}</a>
            </li>
            )) }
         </ul>
       </div>

       <div className="nav_right d-flex align-items-center gap-4">
           
           
       </div>
       </div>
    </Container>
</header>
);
}

export default Header