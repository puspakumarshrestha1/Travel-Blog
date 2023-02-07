import React from 'react'
import Blog from './Blog'
import Counter from './Counter'
import Destination from './Destination'
import Hottels from './Hottels'
import Package from './Package'
import Partners from './Partners'
import Slider from './Slider'
import Startshere from './Startshere'
import ToTop from './ToTop'


function Home() {
  return (
    <>
      <Slider/>
      <Destination/>
      <Package/>
      <Hottels/>
      <Counter/>
      <Partners/>
      <Startshere/>
      <Blog/>
      <ToTop/>
    </>
  )
}

export default Home
