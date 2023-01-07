import React from 'react'
import Hero from '../../components/Hero/Hero'
import Pricing from '../../components/Pricing/Pricing'
import Testimonials from '../../components/Testimonials/Testimonials'
import Accordion from '../../components/Accordion/Accordion'
const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Pricing/>
    <Accordion/>
    </div>
  )
}

export default Homepage