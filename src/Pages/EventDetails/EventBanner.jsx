import React from 'react'
import { Container } from 'react-bootstrap'
import BannerThree from '../../Assets/Image/Home/BannerFour.webp';

const EventBanner = () => {
  return (
    <Container
    fluid
    className='homebannerCont OrganizerBanner'
    style={{ backgroundImage: `url(${BannerThree})` }}>
  </Container>
  )
}

export default EventBanner