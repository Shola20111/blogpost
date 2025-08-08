import React from 'react'
import './headerComp.css'
import NodicRose2 from '../../../assets/nodicRose2.png'

const headerComp = () => {
  return (
    <header className='header-cont'>
     <div className='header-tools-container'>
      <div className='header-left'>
        <img src= {NodicRose2} alt="Nordic Rose" />
      </div>
      <div className='header-right'>
        <li id='home'>Blog</li>
        <li>About</li>
        <li>Links</li>
        <li>Projects</li>
      </div>
      <div className='mobileHeader'>
        
      </div>
     </div>
    </header>
  )
}

export default headerComp