import React from 'react';
import Routing from './Routing'
import ScrollToTop from './components/ScrollToUp'

function App() {
  return (
    <div className="text-sm md:text-base">
      <Routing />
      <ScrollToTop />
    </div>
  );
}

export default App
