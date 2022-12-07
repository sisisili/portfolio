import React from 'react'
import BTN from './BTN.jsx'
import Socials from './Socials.jsx'
import './play.css'
import PlayVideo from '../../assets/Play.gif'

const Play = () => {
  return (
    <div className='play'>

      <Socials />

      <div className='play_container'>
        <img src={PlayVideo} />
        <BTN />
      </div>

      <a className='email'>sisili.tv@gmail.com</a>

    </div>
  )
}

export default Play