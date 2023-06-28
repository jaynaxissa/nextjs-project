'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  // {
  //   id: 2,
  //   title: 'Portfolio',
  //   url: '/portfolio',
  // },
  {
    id: 3,
    title: 'Portfolio',
    url: '/my-portfolio',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        Jayna
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        <MenuIcon />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <CloseIcon />
      </div>
    </div>
  )
}

export default Navbar
