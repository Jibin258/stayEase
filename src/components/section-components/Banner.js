import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function Banner({ scrollToEnquiry }) {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const images = [
        publicUrl + "assets/img/banner/banner_img1.webp",
        publicUrl + "assets/img/banner/banner_img2.webp"
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [images.length])


    return (
        <section className="relative h-[65vh] sm:h-[85vh] md:h-[100vh] mb-[3rem] md:mb-[3rem]">
            <div className="relative w-full h-full overflow-hidden">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`object-cover absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-60" : "opacity-0"}`}
                        loading="lazy"
                    />
                ))}
            </div>

            <div className='absolute top-[65%] md:top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold animate-slide-up whitespace-nowrap">EXPERIENCE CO-LIVING LIKE NEVER BEFORE!</h1>
                <div className='mt-8 xl:whitespace-nowrap animate-slide-up'>
                    <p className="md:text-xl">Experience a new way of living with a vibrant community and all-inclusive amenities designed for modern lifestyles.</p>
                </div>

                <div className="mt-8 animate-slide-up">
                    <button className="relative group py-5 px-8 bg-[#eba312] text-white transition-all duration-500 ease-in-out">
                        <Link onClick={scrollToEnquiry} className="relative z-10 text-white text-center p-4 transition-all duration-500 ease-in-out group-hover:text-black">
                            Make An Enquiry
                        </Link>
                        <div className="absolute inset-0 bg-white transform scale-x-0 origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Banner
