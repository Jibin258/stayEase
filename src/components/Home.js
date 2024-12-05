import React, { useRef } from 'react'
import Banner from './section-components/Banner'
import About from './section-components/About'
import ProductSlider from './section-components/ProductSlider'
import Accomodations from './section-components/Accomodations'
import Category from './section-components/Category'
import Gallery from './section-components/Gallery'
import EnquirySection from './section-components/EnquirySection'

const Home = () => {
    const enquiryRef = useRef(null);

    const scrollToEnquiry = () => {
        enquiryRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return <div>
        <Banner scrollToEnquiry={scrollToEnquiry} />
        <About />
        <ProductSlider />
        <Accomodations />
        <Category />
        <Gallery />
        <EnquirySection ref={enquiryRef} />
    </div>
}

export default Home
