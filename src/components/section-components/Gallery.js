import React, { useState, useEffect, useRef, useMemo } from 'react'

const Gallery = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const images = useMemo(
        () => [
            [
                `${publicUrl}assets/img/gallery/common_area_img1.webp`,
                `${publicUrl}assets/img/gallery/common_area_img2.webp`,
                `${publicUrl}assets/img/gallery/common_area_img3.webp`,
                `${publicUrl}assets/img/gallery/common_area_img4.webp`,
            ],
            [
                `${publicUrl}assets/img/gallery/living_room_img1.webp`,
                `${publicUrl}assets/img/gallery/living_room_img2.webp`,
                `${publicUrl}assets/img/gallery/living_room_img3.webp`,
                `${publicUrl}assets/img/gallery/living_room_img4.webp`,
            ],
            [
                `${publicUrl}assets/img/gallery/kitchen_area_img1.webp`,
                `${publicUrl}assets/img/gallery/kitchen_area_img2.webp`,
                `${publicUrl}assets/img/gallery/kitchen_area_img3.webp`,
                `${publicUrl}assets/img/gallery/kitchen_area_img4.webp`,
            ],
            [
                `${publicUrl}assets/img/gallery/bedroom_img1.webp`,
                `${publicUrl}assets/img/gallery/bedroom_img2.webp`,
                `${publicUrl}assets/img/gallery/bedroom_img3.webp`,
                `${publicUrl}assets/img/gallery/bedroom_img4.webp`,
            ],
        ],
        [publicUrl]
    )

    const descriptions = [
        "Common Area",
        "Living Room",
        "Kitchen Area",
        "Bedroom"
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef()

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [images.length])

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    const currentSlide = (index) => setCurrentIndex(index)

    return (
        <section className='px-3 md:px-10 lg:px-24 pt-[1rem] md:pt-[3rem] lg:pt-[3rem] pb-[2rem] md:pb-[4rem] lg:pb-[5rem]'>
            <div className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl font-semibold my-5">Our Gallery</h1>
            </div>

            <div className="relative text-white pb-[3rem]">
                {descriptions.map((description, index) => (
                    <p key={index} className={`absolute text-xl transition-opacity duration-1000 opacity-${currentIndex === index ? '100' : '0'}`}>{description}</p>
                ))}
            </div>

            <div className="relative flex flex-col justify-center group">
                <div className="h-[40vh] md:h-[80vh] lg:h-[45vh] xl:h-[50vh] w-[100%] relative">
                    {images.map((imageSet, rowIndex) => (
                        <div key={rowIndex} className={`absolute grid grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full transition-opacity duration-1000 ${currentIndex === rowIndex ? 'opacity-100' : 'opacity-0'}`}>
                            {imageSet.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative w-full h-[20vh] md:h-[40vh] lg:h-[40vh] xl:h-[45vh] transition-opacity duration-1000"
                                >
                                    <img
                                        src={image}
                                        alt={`image-${index}`}
                                        className="w-full h-full object-cover"
                                        loading='lazy'
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <button
                    onClick={handlePrev}
                    className="absolute top-[50%] left-[-3%] transform -translate-y-1/2 text-white text-4xl opacity-0 group-hover:opacity-90 transition-opacity duration-300 hidden md:block"
                >
                    ❮
                </button>

                <button
                    onClick={handleNext}
                    className="absolute top-[50%] right-[-3%] transform -translate-y-1/2 text-white text-4xl opacity-0 group-hover:opacity-90 transition-opacity duration-300 hidden md:block"
                >
                    ❯
                </button>
            </div>

            <div className="flex justify-center my-8 md:hidden">
                {descriptions.map((_, index) => (
                    <span
                        key={index}
                        className={`dot cursor-pointer w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-amber-500' : 'bg-gray-300'}`}
                        onClick={() => currentSlide(index)}
                    ></span>
                ))}
            </div>

            <div ref={ref} className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} transition-all mt-[2rem] md:mt-[3rem] lg:mt-0 md:ps-8 xl:pe-[30rem] md:border-l-2 border-[#eba312] w-full max-w-max`}>
                <p>
                    Peek into the world of Stayease through our gallery! We invite you to envision yourself living in complete comfort, connection, and convenience. Here, you'll discover the spaces that make up our unique co-living experience.
                </p>
            </div>
        </section>
    )
}

export default Gallery
