import React from 'react'
import { NavBar, Logo } from './index'

export default function Header() {
  return (
    <header className='h-16 shadow-md flex justify-between items-center px-4 py-2'>
        <Logo />
        <NavBar />
    </header>
  )
}
