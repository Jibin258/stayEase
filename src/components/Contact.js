import React from 'react'
import Navbar from './global-components/Navbar'
import PageHeader from './global-components/PageHeader'
import ContactInfo from './section-components/ContactInfo'
import Footer from './global-components/Footer'

const Contact = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact Us" />
        <ContactInfo />
        <Footer />
    </div>
}

export default Contact
