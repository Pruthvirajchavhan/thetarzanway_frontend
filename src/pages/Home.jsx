import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import WhyDifferent from '../components/WhyDifferent'
import BestPicks from '../components/BestPicks'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <WhyDifferent />
            <BestPicks />
            <FAQ />
            <Footer />
        </div>
    )
}

export default Home