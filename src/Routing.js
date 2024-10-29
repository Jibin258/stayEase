import React from 'react'
import Home from './components/Home'
import MainAbout from './components/MainAbout'
import Properties from './components/Properties'
import MainBlog from './components/MainBlog'
import Contact from './components/Contact'
import Enquiry from './components/Enquiry'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<MainAbout />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/blog" element={<MainBlog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/enquiry" element={<Enquiry />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing