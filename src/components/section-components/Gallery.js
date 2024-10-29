import React, { useState, useEffect, useRef, useCallback } from 'react'

const Gallery = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const [slideIndex, setSlideIndex] = useState(1)
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef()

    const slides = [
        { src: publicUrl + "assets/img/accomodations/accomodation_img1.jpg", alt: 'Single_Private', text: 'Single Private' },
        { src: publicUrl + "assets/img/accomodations/accomodation_img2.jpg", alt: 'Private_With_Balcony', text: 'Private With Balcony' },
        { src: publicUrl + "assets/img/accomodations/accomodation_img3.jpg", alt: 'Double_Sharing', text: 'Double Sharing' },
        { src: publicUrl + "assets/img/accomodations/accomodation_img4.jpg", alt: 'Triple_Sharing', text: 'Triple Sharing' },
    ]

    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e) => {
        touchStartX = e.targetTouches[0].clientX

    }

    const handleTouchMove = (e) => {
        touchEndX = e.targetTouches[0].clientX

    }

    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) {
            plusSlides(1)
        } else if (touchEndX - touchStartX > 50) {
            plusSlides(-1)
        }
    }

    const currentSlide = (index) => setSlideIndex(index)
    const plusSlides = useCallback((n) => setSlideIndex((prev) => ((prev - 1 + n + slides.length) % slides.length) + 1), [slides.length])

    useEffect(() => {
        const intervalId = setInterval(() => {
            plusSlides(1)
        }, 3000)
        return () => clearInterval(intervalId)
    }, [plusSlides])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section className='px-3 md:px-10 lg:px-24 pt-[5rem] lg:pt-[3rem] pb-[2rem] md:pb-[4rem] lg:pb-[5rem]'>
            <div className="mb-5 md:mb-8 text-center">
                <span className='rounded-full px-4 py-1 bg-yellow-100 text-amber-500'>Our Accommodations</span>
                <h1 className="text-2xl md:text-3xl font-bold my-5">Gallery</h1>
            </div>

            <div
                className="relative w-full overflow-hidden group"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="relative w-full h-[50vh] md:h-[75vh]">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${slideIndex === index + 1 ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                            />

                            <div className="numbertext absolute top-0 left-0 text-white p-2 text-sm opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                                {index + 1} / {slides.length}
                            </div>

                            <div className="bg-[#282b38] rounded-md absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white py-2 px-10 text-base opacity-80 transition-opacity duration-300">
                                {slide.text}
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="prev absolute top-[50%] left-0 transform -translate-y-1/2 text-4xl text-white py-2 px-4 hidden md:block opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                    onClick={() => plusSlides(-1)}
                >
                    ❮
                </button>
                <button
                    className="next absolute top-[50%] right-0 transform -translate-y-1/2 text-4xl text-white py-2 px-4 hidden md:block opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                    onClick={() => plusSlides(1)}
                >
                    ❯
                </button>
            </div>
            <div className="flex justify-center mt-8">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot cursor-pointer w-2 h-2 mx-1 rounded-full ${slideIndex === index + 1 ? 'bg-amber-500' : 'bg-gray-300'}`}
                        onClick={() => currentSlide(index + 1)}
                    ></span>
                ))}
            </div>

            <div ref={ref} className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} transition-all mt-10 md:ps-8 lg:pe-[30rem] md:border-l-2 border-gray-700 w-full max-w-max`}>
                <p className='text-gray-500'>
                    We understand that everyone has different needs when it comes to living space. That's why we offer a variety of accommodation options to suit your style and budget. No matter which option you choose, you'll benefit from all the advantages of the Stayease living experience.
                </p>
            </div>
        </section>
    )
}

export default Gallery