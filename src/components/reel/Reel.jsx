import React from 'react';
import { Container } from 'react-bootstrap';

import './reel.css'
import ReelBoard from '../../assets/ReelBoard.png'

const Reel = () => {
  return (
    <section className='reel' id='reel'>

     <Container className='reel_container'>
        <img src={ReelBoard} className='reel_board'/>     
          <iframe src="https://player.vimeo.com/video/782189304?h=9a23068217&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          title="SISI 2023 REEL"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen>
          </iframe>
     </Container>

    </section>
  )
}

export default Reel