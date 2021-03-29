import React from 'react'
import Banner from './components/Banner'
import Contact from './components/Contact/Contact'
import PT from './components/PT'
import Tiles from './components/Tiles'

const Home = () => {
  return (
    < >
    <Banner/>
      <div id="main">
        <Tiles />
        <PT/>
      </div>
    <Contact/>
    </>
  )
}

export default Home
