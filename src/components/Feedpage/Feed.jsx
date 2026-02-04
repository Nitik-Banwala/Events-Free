import React from 'react'
import P3section1 from './P3section1'
import Navbar from '../common/Navbar'
import Comfooter from '../common/Comfooter'
import Post from './Post'

const Feed = () => {
  return (
    <div>
      <Navbar/>
      <P3section1 />
      <Post/>
      <Comfooter/>
    </div>
  )
}

export default Feed