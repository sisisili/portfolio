import React from 'react'
import BTN from '../general/Button/BTN.jsx'
import Socials from '../general/Socials.jsx'
import './play.css'
import PlayVideo from '../../assets/Play_loop.gif'
import Butterflies from '../../assets/Butterflies.gif'

const Play = () => {
  return (
    <section className='play' id='play' >

      <img className='butterflies' src={Butterflies} />

      <Socials />

      <div className='play_container'>
        <img className='play_gifs' src={PlayVideo} />
        <BTN />
      </div>

      <a className='email'>sisili.tv@gmail.com</a>

    </section>
  )
}

export default Play