import React from 'react'
import Navbar from './global-components/Navbar'
import PageHeader from './global-components/PageHeader'
import About from './section-components/About'
import Footer from './global-components/Footer'

const MainAbout = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About Us" />
        <About property="hidden" marginBottom = 'mt-[4rem] md:mt-[5rem] lg:mt-[6rem] mb-[14rem] md:mb-[0rem] lg:mb-[5.5rem]' />
        <Footer />
    </div>
}

export default MainAbout
