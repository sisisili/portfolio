import React from 'react'
import './about.css'

import Headshot from '../../assets/Sisi_Head_Woo.png'

const About = () => {
  return (
    <section className='about' id='about'>
      <img src={ Headshot } className='headshot' />
      <h1> Hi here, I'm Sisi Li :)
        <br></br> a Motion Designer based in San Francisco.
        <br></br> Let's catch a fun project together 🦋
      </h1>
    </section>
  )
}

export default About
