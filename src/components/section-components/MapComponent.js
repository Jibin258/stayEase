import React from 'react';

const MapComponent = () => {
  return (
    <div className="flex justify-center mt-10">
      <iframe
        className='w-[90vw] h-[50vh] md:h-[70vh]'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12280.678872647694!2d77.6887!3d12.8485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f5e9ee26d5%3A0x1c911e3ffdcab229!2s216%2C%203rd%20Cross%20Road%2C%20off%20Neeladri%20Road%2C%20Neeladri%20Nagar%2C%20Electronics%20City%20Phase%201%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1615391734658!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        title="Location_Map"
      ></iframe>
    </div>
  );
};

export default MapComponent;
