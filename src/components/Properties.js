import React from 'react'
import Navbar from './global-components/Navbar'
import PageHeader from './global-components/PageHeader'
import ProductSlider from './section-components/ProductSlider'
import Footer from './global-components/Footer'

const Properties = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Properties" />
        <ProductSlider marginTop="!my-[3rem] lg:my-10" />
        <Footer />
    </div>
}

export default Properties
