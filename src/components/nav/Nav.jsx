import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav>
        <div className='nav_text'>
          <div className='logo'></div>
          <div className='nav_list'>
              <a href="#play" >Play</a>
              <a href="#work" >Work</a>
              <a href="#reel" >Reel</a>
              <a href="#about" >About</a>
          </div>
        </div>
    </nav>
  )
}

export default Nav