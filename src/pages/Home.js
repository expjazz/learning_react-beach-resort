import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeatureRooms from '../components/FeaturedRooms'
import Button from '../components/StyledHero'
const Home = () => {
  return (
    <>
    <Hero hero='defaultHero'>
      <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
        <Link to='rooms' className='btn-primary'>
          our rooms
        </Link>
      </Banner>
    </Hero>
    <Services />
    <FeatureRooms />
    <Button> Hello </Button>
    </>
    )
}

export default Home;
