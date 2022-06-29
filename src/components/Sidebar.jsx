import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { BsHouseDoor, BsFilm, BsChevronRight } from 'react-icons/bs'
import { CgScreen } from 'react-icons/cg'

function Sidebar({ shrinkSidebar }) {
  const location = useLocation()
  const links = [
    { name: 'Home', icon: <BsHouseDoor className='w-8 h-8' />, path: '/' },
    { name: 'Movies', icon: <BsFilm className='w-8 h-8' />, path: '/movies' },
    {
      name: 'TV Shows',
      icon: <CgScreen className='w-8 h-8' />,
      path: '/tv-shows',
    },
  ]

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <>
      <div
        className={`sidebar-${
          shrinkSidebar ? 'slim' : 'wide'
        } mb-2 ml-2 mr-10 rounded-lg flex flex-col`}
      >
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`${
              pathMatchRoute(`${link.path}`) ? 'active' : ''
            } flex items-center p-2`}
          >
            {link.icon}
            {!shrinkSidebar && <p className='pl-6'> {link.name}</p>}
          </Link>
        ))}

        {!shrinkSidebar && (
          <Link
            to='/about'
            className='uppercase font-bold pl-2 pt-2 flex items-center'
          >
            More <BsChevronRight className='h-6 w-6' />
          </Link>
        )}
      </div>
    </>
  )
}

export default Sidebar
