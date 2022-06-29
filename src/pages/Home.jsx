// Plex homepage
import React from 'react'
import ContinueWatching from './../components/ContinueWatching'
import RecentlyAdded from './../components/RecentlyAdded'

function Home() {
  return (
    <div className=''>
      <ContinueWatching />
      <RecentlyAdded />
    </div>
  )
}

export default Home
