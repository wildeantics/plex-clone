import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { GiHamburgerMenu } from 'react-icons/gi'
import { SiPlex } from 'react-icons/si'
import { BsHouseDoor, BsFilm } from 'react-icons/bs'
import { CgScreen, CgCast } from 'react-icons/cg'

function Navigation() {
  const [shrinkSidebar, setShrinkSidebar] = useState(false)
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <>
      <header>
        <nav className='navbar m-2 p-2 rounded-lg h-14 flex items-center'>
          <ul className='flex items-center'>
            <li
              className='navbarItem'
              onClick={() => setShrinkSidebar(!shrinkSidebar)}
            >
              <GiHamburgerMenu className='w-9 h-9' />
            </li>
            <li className='navbarItem'>
              <SiPlex fill='var(--color-accent-gold)' className='w-9 h-9' />
            </li>
            <li className='navbarItem'>
              {/* Back button with set state when not home */}
            </li>
            <li className='navbarItem'>{/* Search bar */}</li>
            <li className='navbarItem'>
              <button className='btn btn-premium rounded px-6 py-1.5 text-xs font-bold'>
                Go Premium
              </button>
            </li>
            <div className='w-0.5 h-6 mx-2 vline'></div>
            <li className='navbarItem'>{/* Heartbeat */}</li>
            <li className='navbarItem'>{/* Settings */}</li>
            <li className='navbarItem'>
              <CgCast
                className='w-9 h-9'
                fill='var(--color-accent-dark-grey)'
              />
            </li>
            <li className='navbarItem'>{/* User icon with drop down */}</li>
          </ul>
        </nav>
      </header>
      <div
        className={`sidebar-${
          shrinkSidebar ? 'slim' : 'wide'
        } mb-2 ml-2 rounded-lg flex flex-col sticky`}
      >
        <Link
          to='/'
          className={`${
            pathMatchRoute('/') ? 'active' : ''
          } flex items-center p-2`}
        >
          <BsHouseDoor className='w-9 h-9' />{' '}
          <p className={`${shrinkSidebar ? 'hidden' : ''} pl-3`}> Home</p>
        </Link>
        <Link
          to='/movies'
          className={`${
            pathMatchRoute('/movies') ? 'active' : ''
          } flex items-center p-2`}
        >
          <BsFilm className='w-9 h-9' />
          <p className={`${shrinkSidebar ? 'hidden' : ''} pl-3`}> Movies</p>
        </Link>
        <Link
          to='/tv-shows'
          className={`${
            pathMatchRoute('/tv-shows') ? 'active' : ''
          } flex items-center p-2`}
        >
          <CgScreen className='w-9 h-9' />
          <p className={`${shrinkSidebar ? 'hidden' : ''} pl-3`}> TV Shows</p>
        </Link>
      </div>
    </>
  )
}

export default Navigation
