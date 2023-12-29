import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='mt-10'>
    <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
