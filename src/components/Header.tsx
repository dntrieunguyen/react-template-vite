import React from 'react'
import Logo from '@/components/Logo'
import { Link, Outlet } from 'react-router-dom'
import { cn } from '@/lib/utils'

const path = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About' },
  { path: '/FAQ', text: 'FAQ' },
  { path: '/feature', text: 'Feature' },
  { path: '/login', text: 'Login' }
]

const Header: React.FC = () => {
  return (
    <header className={cn('logo', 'pb-5 border-b-2 text-gray-300 mb-2 font-semibold')}>
      <div className={cn('header-content', 'flex justify-between items-center w-full mx-auto mt-5')}>
        <Logo></Logo>

        <div className={cn('nav', 'flex w-1/2 justify-evenly items-center')}>
          {path.map((items, index) => (
            <Link
              key={index}
              className={cn(
                'px-3 py-2 border border-transparent',
                'hover:border hover:border-yellow-400 hover:text-yellow-400'
              )}
              to={items.path}
            >
              {items.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
