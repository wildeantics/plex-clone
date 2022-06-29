import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { SiPlex } from 'react-icons/si'
import { BiUserCircle } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { CgCast } from 'react-icons/cg'
import { FaWaveSquare, FaWrench } from 'react-icons/fa'

function Navbar({ setShrinkSidebar, shrinkSidebar }) {
  const [search, setSearch] = useState('')
  const handleChange = (e) => setSearch(e.target.value)
  return (
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
          <li className='navbarItem relative'>
            <input
              type='text'
              value={search}
              onChange={handleChange}
              className='search pl-10  rounded-full h-8'
            />
            <BsSearch className='z-10 absolute inset-y-0 left-0 h-full ml-3' />
          </li>
          <li className='navbarItem'>
            <button className='btn btn-premium rounded px-6 py-1.5 text-xs font-bold'>
              Go Premium
            </button>
          </li>
          <div className='w-0.5 h-6 mx-2 vline'></div>
          <li className='navbarItem'>
            <FaWaveSquare className='w-9 h-9' />
          </li>
          <li className='navbarItem'>
            <FaWrench className='w-9 h-9' />
          </li>
          <li className='navbarItem'>
            <CgCast className='w-9 h-9' fill='var(--color-accent-dark-grey)' />
          </li>
          <li className='navbarItem'>
            <BiUserCircle className='w-9 h-9' />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
