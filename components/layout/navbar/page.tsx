// import { Anek_Malayalam } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
     <nav className="flex items-center justify-between px-16 bg-gradient-to-bl from-yellow-300 to-pink-300 text-white mt-3 p-2">
        <div>
          <span id='main' data-cy='brand' className="font-bold text-5xl">Brand</span>
        </div>
        <div className="font-semibold text-xl">
          <Link data-cy='menu-navbar' href={'/'} className="px-4">Halaham Utama</Link>
          <Link data-cy='menu-navbar' href={'/produk'} className="px-4">Produk</Link>
          <Link data-cy='menu-navbar' href={'/about'} className="px-4">About</Link>
          <Link data-cy='menu-navbar' href={'/dashboard'} className="px-4">Dashboard</Link>
          <Link data-cy='menu-navbar' href={'/login'} className="">Login</Link>
        </div>
      </nav>
  )
}

export default Navbar
// Anek_Malayalam