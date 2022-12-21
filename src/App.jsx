import React from 'react'

import Nav from './components/nav/Nav.jsx'
import Play from './components/play/Play.jsx'
import Work from './components/work/Work.jsx'
import Reel from './components/reel/Reel.jsx'
import About from './components/about/About.jsx'
import Footer from './components/footer/Footer.jsx'


 const App = () => {
    return (
        <>
            <Nav />
            <h3 className='note' >🚧 Website Under Construction 🚧<br></br>Will be back soon~👋</h3>
            <Play />
            <Work />
            <Reel />
            <About />
            <Footer />
        </>
    )
}

export default App