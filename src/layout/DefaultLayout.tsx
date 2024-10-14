import React from 'react'

import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const DefaultLayout: React.FC = () => {
  return (
    <section className='max-w-[1024px] mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
    </section>
  )
}

export default DefaultLayout
