import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from 'react'
import DefaultScrollToTop from './components/global-components/DefaultScrollToTop'

const Home = lazy(() => import('./components/Home'))
const MainAbout = lazy(() => import('./components/MainAbout'))
const Properties = lazy(() => import('./components/Properties'))
const MainBlog = lazy(() => import('./components/MainBlog'))
const MainBlogContent = lazy(() => import('./components/MainBlogContent'))
const Contact = lazy(() => import('./components/Contact'))
const Enquiry = lazy(() => import('./components/Enquiry'))
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage'))
const TermsConditionsPage = lazy(() => import('./components/TermsConditionsPage'))

const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid border-[#eba312] rounded-full" role="status">
        </div>
    </div>
)

function Routing() {
    return (
        <Suspense fallback={< LoadingSpinner />}>
            < DefaultScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<MainAbout />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/blog" element={<MainBlog />} />
                <Route path="/blog/top-benefits-of-co-living-or-sharing-accommodation-for-millennials-in-bangalore" element={<MainBlogContent />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/stayease-harmonia" element={<Enquiry />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/Terms-conditions" element={<TermsConditionsPage />} />
            </Routes>
        </Suspense >
    )
}

export default Routing