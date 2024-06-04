import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import AimContent from '../Components/AimContent/AimContent'
import Footer from '../Components/Footer/Footer'
import '../styles/Home.css'

export default function Home() {
    return (
        <>
            <div className="Navbar_and_Hero">
                <Navbar />
                <Hero />
            </div>
            <AimContent />
            <Footer />
        </>
    )
}
