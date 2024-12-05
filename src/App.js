import React from 'react'
import Navbar from './components/global-components/Navbar'
import Routing from './Routing'
import Footer from './components/global-components/Footer'
import ScrollToTop from './components/global-components/ScrollToUp'

function App() {
  return (
    <div className="text-sm md:text-base bg-[#000000] text-white">
      <Navbar />
      <Routing />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App
