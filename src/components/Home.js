import React, { useRef } from 'react';
import Navbar from './global-components/Navbar'
import Banner from './section-components/Banner'
import About from './section-components/About'
import ProductSlider from './section-components/ProductSlider'
import Gallery from './section-components/Gallery';
import Category from './section-components/Category'
import EnquirySection from './section-components/EnquirySection'
import Footer from './global-components/Footer'

const Home = () => {
    const enquiryRef = useRef(null);

    const scrollToEnquiry = () => {
        enquiryRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return <div>
        <Navbar />
        <Banner scrollToEnquiry={scrollToEnquiry} />
        <About />
        <ProductSlider />
        <Gallery />
        <Category />
        <EnquirySection ref={enquiryRef} />
        <Footer />
    </div>
}

export default Home
