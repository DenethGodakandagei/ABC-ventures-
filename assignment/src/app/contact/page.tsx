import Contact from '@/components/contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home from '@/components/Home'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
        <Home />
        <Contact />
        <Footer />
    </div>
  )
}

export default page