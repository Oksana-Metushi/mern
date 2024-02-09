import React from 'react'
import Banner from '../../components/Banner'
import Wines from './Wines'
// import Testimonials from './Testimonials'
import About from './About'
import Awards from './Awards'

const Home = () => {
  return (
    <div>
      <Banner
        link="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
        title="Vignamaggio's"
        subtitle="Fifteenth-century cellars were the starting point of a long journey that began more than 600 years ago."
      />
      <About/>
      <Awards/>
      <Wines />
      {/* <Testimonials /> */}
    </div>
  )
}

export default Home