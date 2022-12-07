import React from 'react'
import { ImBehance } from 'react-icons/im'
import { BsDribbble } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='socials'>
        <a href='https://www.behance.net/sisisili' target='_blank' className='social_icon'><ImBehance /></a>
        <a href='https://dribbble.com/sisili' target='_blank' className='social_icon'><BsDribbble /></a>
        <a href='https://www.instagram.com/sisi_lee/' target='_blank' className='social_icon'><BsInstagram /></a>
    </div>
  )
}

export default Socials