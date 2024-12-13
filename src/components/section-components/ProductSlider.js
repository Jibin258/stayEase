import React, { useState } from "react"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div
            className="hidden bg-white text-black hover:bg-amber-500 hover:text-white md:block absolute left-[-50px] top-1/2 transform -translate-y-1/2 p-3 rounded-full z-10 text-xl text-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 cursor-pointer" onClick={onClick}>
            <FaArrowLeft />
        </div>
    )
}

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div
            className="hidden bg-white text-black hover:bg-amber-500 hover:text-white md:block absolute right-[-50px] top-1/2 transform -translate-y-1/2 p-3 rounded-full z-10 text-xl text-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 cursor-pointer" onClick={onClick}>
            <FaArrowRight />
        </div>
    )
}

const ProductSlider = ({ marginTop, heading, display }) => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    const [activeSlide, setActiveSlide] = useState(0)
    const [slidesToScroll, setSlidesToScroll] = useState(3)

    const settings = {
        dots: true,
        customPaging: i => (
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${i === Math.floor(activeSlide / slidesToScroll) ? "bg-[#eba312]" : "bg-white"
                }`} />
        ),
        afterChange: (current) => {
            setActiveSlide(current)
        },
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    beforeChange: () => setSlidesToScroll(2)
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    beforeChange: () => setSlidesToScroll(1)
                },
            },
        ],
    }

    return (
        <div className={`${(marginTop || heading) ? marginTop : 'mt-[17rem]'} md:mt-0 ${heading ? 'mb-14' : 'md:py-5 lg:py-14'} px-3 md:px-[4rem] lg:px-24`}>
            <div className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl font-semibold my-5">Featured Properties</h1>
            </div>

            <div className={`${marginTop ? 'hidden' : ''}`}>
                <Slider {...settings} className="relative group">
                    {!display && (
                        <div className="w-[calc((100vw-60px)/3)] mb-5 px-3 md:px-5">
                            <div className="relative">
                                <div className='overflow-hidden rounded-lg'>
                                    <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                                        <img src={publicUrl + "assets/img/product/property-img1.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                                        <Link to="/stayease-harmonia" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                            BOOK NOW
                                        </Link>
                                    </div>
                                </div>

                                <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                                    <p className='font-semibold'>StayEase Harmonia</p>
                                    <p className='mt-1 text-sm'>Electronic City, Bangalore</p>
                                    <p className='text-sm'>Price Per Night: ₹8999</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-3 md:px-5">
                        <div className="relative">
                            <div className='overflow-hidden rounded-lg'>
                                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                                    <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                        BOOK NOW
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                                <p className='font-semibold'>Koramangala - Ashwini Layout</p>
                                <p className='mt-1 text-sm'>Koramangala, Bangalore</p>
                                <p className='text-sm'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-3 md:px-5">
                        <div className="relative">
                            <div className='overflow-hidden rounded-lg'>
                                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                                    <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                        BOOK NOW
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                                <p className='font-semibold'>Koramangala - Sony Signal</p>
                                <p className='mt-1 text-sm'>Koramangala, Bangalore</p>
                                <p className='text-sm'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-3 md:px-5">
                        <div className="relative">
                            <div className='overflow-hidden rounded-lg'>
                                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                                    <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                        BOOK NOW
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                                <p className='font-semibold'>Koramangala - Water Tank</p>
                                <p className='mt-1 text-sm'>Koramangala, Bangalore</p>
                                <p className='text-sm'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-3 md:px-5">
                        <div className="relative">
                            <div className='overflow-hidden rounded-lg'>
                                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                                    <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                        BOOK NOW
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                                <p className='font-semibold'>HSR - Sector 1</p>
                                <p className='mt-1 text-sm'>HSR Sector, Bangalore</p>
                                <p className='text-sm'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-3 md:px-5">
                        <div className="relative">
                            <div className='overflow-hidden rounded-lg'>
                                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                                    <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                        BOOK NOW
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                                <p className='font-semibold'>HSR - Sector 4</p>
                                <p className='mt-1 text-sm'>HSR Sector, Bangalore</p>
                                <p className='text-sm'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-3 md:px-5">
                        <div className="relative">
                            <div className='overflow-hidden rounded-lg'>
                                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                                    <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                        BOOK NOW
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                                <p className='font-semibold'>HSR - Sector 6</p>
                                <p className='mt-1 text-sm'>HSR Sector, Bangalore</p>
                                <p className='text-sm'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-3 md:px-5">
                        <div className="relative">
                            <div className='overflow-hidden rounded-lg'>
                                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                                    <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                        BOOK NOW
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                                <p className='font-semibold'>Whitefield - Nallurhalli</p>
                                <p className='mt-1 text-sm'>Whitefield, Bangalore</p>
                                <p className='text-sm'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-3 md:px-5">
                        <div className="relative">
                            <div className='overflow-hidden rounded-lg'>
                                <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                                    <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                        BOOK NOW
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                                <p className='font-semibold'>Whitefield - Channasandra</p>
                                <p className='mt-1 text-sm'>Whitefield, Bangalore</p>
                                <p className='text-sm'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className={`${marginTop ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-3 md:px-5' : 'hidden'}`}>
                <div className="relative mb-5">
                    <div className='overflow-hidden rounded-lg'>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                            <img src={publicUrl + "assets/img/product/property-img1.webp"} alt="Property1" className="w-full md:h-[45vh]" />
                            <Link to="/stayease-harmonia" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                BOOK NOW
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                        <p className='font-semibold'>StayEase Harmonia</p>
                        <p className='mt-1 text-sm'>Electronic City, Bangalore</p>
                        <p className='text-sm'>Price Per Night: ₹8999</p>
                    </div>
                </div>

                <div className="relative mb-5">
                    <div className='overflow-hidden rounded-lg'>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                            <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                BOOK NOW
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                        <p className='font-semibold'>Koramangala - Ashwini Layout</p>
                        <p className='mt-1 text-sm'>Koramangala, Bangalore</p>
                        <p className='text-sm'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative mb-5">
                    <div className='overflow-hidden rounded-lg'>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                            <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                BOOK NOW
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                        <p className='font-semibold'>Koramangala - Sony Signal</p>
                        <p className='mt-1 text-sm'>Koramangala, Bangalore</p>
                        <p className='text-sm'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative mb-5">
                    <div className='overflow-hidden rounded-lg'>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                            <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                BOOK NOW
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                        <p className='font-semibold'>Koramangala - Water Tank</p>
                        <p className='mt-1 text-sm'>Koramangala, Bangalore</p>
                        <p className='text-sm'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative mb-5">
                    <div className='overflow-hidden rounded-lg'>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                            <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                BOOK NOW
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                        <p className='font-semibold'>HSR - Sector 1</p>
                        <p className='mt-1 text-sm'>HSR Sector, Bangalore</p>
                        <p className='text-sm'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative mb-5">
                    <div className='overflow-hidden rounded-lg'>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                            <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                BOOK NOW
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                        <p className='font-semibold'>HSR - Sector 4</p>
                        <p className='mt-1 text-sm'>HSR Sector, Bangalore</p>
                        <p className='text-sm'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative mb-5">
                    <div className='overflow-hidden rounded-lg'>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                            <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                BOOK NOW
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                        <p className='font-semibold'>HSR - Sector 6</p>
                        <p className='mt-1 text-sm'>HSR Sector, Bangalore</p>
                        <p className='text-sm'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative mb-5">
                    <div className='overflow-hidden rounded-lg'>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                            <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                BOOK NOW
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                        <p className='font-semibold'>Whitefield - Nallurhalli</p>
                        <p className='mt-1 text-sm'>Whitefield, Bangalore</p>
                        <p className='text-sm'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative mb-5">
                    <div className='overflow-hidden rounded-lg'>
                        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property1" className="w-full h-[45vh] object-cover" loading="lazy" />
                            <Link to="" className='absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm' type='button'>
                                BOOK NOW
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-3 px-5 py-3 border border-white rounded-lg">
                        <p className='font-semibold'>Whitefield - Channasandra</p>
                        <p className='mt-1 text-sm'>Whitefield, Bangalore</p>
                        <p className='text-sm'>Price Per Night: N/A</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSlider
