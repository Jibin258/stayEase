import React from 'react'
import Navbar from './global-components/Navbar'
import PageHeader from './global-components/PageHeader'
import Blog from './section-components/Blog'
import Footer from './global-components/Footer'

const MainBlog = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog" />
        <Blog />
        <Footer />
    </div>
}

export default MainBlog
