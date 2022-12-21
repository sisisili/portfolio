import React from 'react'
import './workslot.css'

const WorkSlot = ({title, image}) => {
  return (
        <div className='work_slot'>
            <img src={image} className='work_image' />
            <p className='work_title'>{title}</p>
        </div>
  )
}

export default WorkSlot
