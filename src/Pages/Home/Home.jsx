import React from 'react'
import Banner from './Banner'
import Event from './Event'
import FindYourEvent from './FindYourEvent'
import EventSponsor from './EventSponsor'
import '../../Styles/Home.css'


const Home = () => {
  return (
    <main id='home'>
      <Banner/>
      <Event/>
      <FindYourEvent/>
      <EventSponsor/>
    </main>
  )
}

export default Home
