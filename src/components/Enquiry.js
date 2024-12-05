import React from 'react'
import PropertyEnquiry1 from './property-components/PropertyEnquiry1'
import ProductSlider from './section-components/ProductSlider'

const AboutMain = () => {
    return <div>
        <PropertyEnquiry1 />
        <ProductSlider heading='Similar Properties' display='hidden' />
    </div>
}

export default AboutMain
