import React from 'react'
import Navbar from './global-components/Navbar'
import PropertyEnquiry from './section-components/PropertyEnquiry'
import ProductSlider from './section-components/ProductSlider'
import Footer from './global-components/Footer'

const AboutMain = () => {
    return <div>
        <Navbar />
        <PropertyEnquiry />
        <ProductSlider heading='Similar Properties' display='hidden' />
        <Footer />
    </div>
}

export default AboutMain
