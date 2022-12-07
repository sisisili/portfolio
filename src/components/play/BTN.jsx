import React from 'react'
import './BTN.css'

const copy_text = 'Catch'

const BTN = () => {
  return (
    <div className='button_container'>
      <button className='button'>{copy_text}</button>
      <button className='button_shadow'>{copy_text}</button>
    </div>
  )
}

export default BTN