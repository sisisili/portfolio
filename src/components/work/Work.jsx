import React from 'react'

import './work.css'
import WorkSlot from './WorkSlot.jsx'

import { ScrollContainer } from 'react-indiana-drag-scroll';


import Work0 from '../../assets/work/work0.png'
import Work1 from '../../assets/work/work1.png'
import Work2 from '../../assets/work/work2.png'
import Work3 from '../../assets/work/work3.png'
import Work4 from '../../assets/work/work4.gif'
import Work5 from '../../assets/work/work5.png'
import Work6 from '../../assets/work/work6.png'
import Work7 from '../../assets/work/work7.png'
import Work8 from '../../assets/work/work8.gif'


import Tape0 from '../../assets/work/tape0.svg'
import Tape1 from '../../assets/work/tape1.svg'
import Tape2 from '../../assets/work/tape2.svg'
import Tape3 from '../../assets/work/tape3.svg'
import Tape4 from '../../assets/work/tape4.svg'
import Tape5 from '../../assets/work/tape5.svg'
import Tape6 from '../../assets/work/tape6.svg'
import Tape7 from '../../assets/work/tape7.svg'
import Tape8 from '../../assets/work/tape8.svg'


const titles = [ 
  'Pfizer',
  'Not all Heroes Wear Capes',
  'Google Cloud Next 21',
  'Safer Internet Quest', 
  'Find Harmony This Season',
  'San Francisco Bay',
  'Roborock Q7MAX',
  'All Creatures Great & Small ',
  'Introduce Google Ad Mobster'
]

const Work = () => {
  
  return (
    <ScrollContainer className='work' id='work' >
      <div className='work_section'>

        <div className='work0' >
          <img src={Tape0} className='tapes tape0' />
          <WorkSlot title={titles[0]} image={Work0} />
        </div>

        <div className='work1' >
          <img src={Tape1} className='tapes tape1' />
          <WorkSlot title={titles[1]} image={Work1} />
        </div>

        <div className='work2' >
          <img src={Tape2} className='tapes tape2' />
          <WorkSlot title={titles[2]} image={Work2} />
        </div>

        <div className='work3' >
          <img src={Tape3} className='tapes tape3' />
          <WorkSlot title={titles[3]} image={Work3} />
        </div>

        <div className='work4' >
          <img src={Tape4} className='tapes tape4' />
          <WorkSlot title={titles[4]} image={Work4} />
        </div>

        <div className='work5' >
          <img src={Tape5} className='tapes tape5' />
          <WorkSlot title={titles[5]} image={Work5} />
        </div>

        <div className='work6' >
          <img src={Tape6} className='tapes tape6' />
          <WorkSlot title={titles[6]} image={Work6} />
        </div>

        <div className='work7' >
          <img src={Tape7} className='tapes tape7' />
          <WorkSlot title={titles[7]} image={Work7} />
        </div>

        <div className='work8' >
          <img src={Tape8} className='tapes tape8' />
          <WorkSlot title={titles[8]} image={Work8} />
        </div>

      </div>

    </ScrollContainer>
  )
}

export default Work