import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import BlogSection from '../../components/blogSection/BlogSection'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <BlogSection />
        <Footer />
    </div>
  )
}

export default Home