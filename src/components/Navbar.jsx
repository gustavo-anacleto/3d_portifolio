import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { li, nav } from 'framer-motion/client'
import { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggleMenu, setToggleMenu] = useState(false)

  function handleClickRootLink() {
    setActive("")
    window.scrollTo(0, 0)
  }

  const navLinksContent = () => (
    navLinks.map(link => (
      <li key={link.id}
        className={`${active === link.title ? 'text-white' : 'text-secondary'
          } hover:text-white cursor-pointer`} onClick={() => setActive(link.title)}>
        <a href={`#${link.id}`}>{link.title}</a>
      </li>
    ))
  )

  const navLinksMobileViewContent = () => (
    navLinks.map(link => (
      <li key={link.id}
        className={`${active === link.title ? 'text-white' : 'text-secondary'
          } font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {
            setToggleMenu(false)
            setActive(link.title)
          }}>
        <a href={`#${link.id}`}>{link.title}</a>
      </li>
    ))
  )

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div
        className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => handleClickRootLink()}>
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          <p className='text-white text-[18px] flex flex-row  font-bold cursor-pointer'>
            Gustavo &nbsp;
            <span className='sm:block hidden'>|&nbsp; Full Stack Enginieer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinksContent()}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggleMenu ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggleMenu(!toggleMenu)} />
        </div>

        <div className={`${!toggleMenu ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinksMobileViewContent()}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar