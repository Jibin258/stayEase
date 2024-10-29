import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div
            className="hidden md:block absolute left-[-50px] top-1/2 transform -translate-y-1/2 border border-slate-300 p-3 rounded-full z-10 text-xl text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 cursor-pointer" onClick={onClick}>
            <FaArrowLeft />
        </div>
    )
}

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div
            className="hidden md:block absolute right-[-50px] top-1/2 transform -translate-y-1/2 border border-slate-300 p-3 rounded-full z-10 text-xl text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 cursor-pointer" onClick={onClick}>
            <FaArrowRight />
        </div>
    )
}

const ProductSlider = ({ marginTop, heading, display }) => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let headingTitle = heading ? heading : 'Featured Listings';

    const settings = {
        dots: true,
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
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <div className={`${(marginTop || heading) ? marginTop : 'mt-[17rem]'} md:mt-0 ${heading ? 'mb-14' : 'md:py-5 lg:py-14'} px-3 md:px-[4rem] lg:px-24`}>
            <div className="mb-10 text-center">
                <span className={`rounded-full px-4 py-1 bg-yellow-100 text-amber-500 ${display ? display : ''}`}>Our Properties</span>
                <h1 className="text-2xl md:text-3xl font-bold my-5">{headingTitle}</h1>
            </div>

            <div className={`${marginTop ? 'hidden' : ''}`}>
                <Slider {...settings} className="relative group">
                    {!display && (
                        <div className="w-[calc((100vw-60px)/3)] mb-5 px-5">
                            <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img src={publicUrl + "assets/img/product/property-img1.webp"} alt="Property1" className="w-full h-[45vh]" />
                                <Link to="/enquiry" className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm' type='button' onClick={() => window.scrollTo(0, 0)}>
                                    BOOK NOW
                                </Link>
                                <div className="text-center px-5 py-3 z-10 bg-slate-100">
                                    <p className='font-semibold text-slate-500'>StayEase Hive Harmonia</p>
                                    <p className='font-base text-slate-500'>Electronic City, Bangalore</p>
                                    <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: ₹8999</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-5">
                        <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property2" className="w-full h-[45vh]" />
                            <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                                BOOK NOW
                            </button>
                            <div className="text-center px-5 py-3 z-10 bg-slate-100">
                                <p className='font-semibold text-slate-500'>Koramangala - Ashwini Layout</p>
                                <p className='font-base text-slate-500'>Koramangala, Bangalore</p>
                                <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-5">
                        <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property3" className="w-full h-[45vh]" />
                            <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                                BOOK NOW
                            </button>
                            <div className="text-center px-5 py-3 z-10 bg-slate-100">
                                <p className='font-semibold text-slate-500'>Koramangala - Sony Signal</p>
                                <p className='font-base text-slate-500'>Koramangala, Bangalore</p>
                                <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-5">
                        <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property4" className="w-full h-[45vh]" />
                            <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                                BOOK NOW
                            </button>
                            <div className="text-center px-5 py-3 z-10 bg-slate-100">
                                <p className='font-semibold text-slate-500'>Koramangala - Water Tank</p>
                                <p className='font-base text-slate-500'>Koramangala, Bangalore</p>
                                <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-5">
                        <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property5" className="w-full h-[45vh]" />
                            <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                                BOOK NOW
                            </button>
                            <div className="text-center px-5 py-3 z-10 bg-slate-100">
                                <p className='font-semibold text-slate-500'>HSR - Sector 1</p>
                                <p className='font-base text-slate-500'>HSR Sector, Bangalore</p>
                                <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-5">
                        <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property5" className="w-full h-[45vh]" />
                            <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                                BOOK NOW
                            </button>
                            <div className="text-center px-5 py-3 z-10 bg-slate-100">
                                <p className='font-semibold text-slate-500'>HSR - Sector 4</p>
                                <p className='font-base text-slate-500'>HSR Sector, Bangalore</p>
                                <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-5">
                        <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property5" className="w-full h-[45vh]" />
                            <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                                BOOK NOW
                            </button>
                            <div className="text-center px-5 py-3 z-10 bg-slate-100">
                                <p className='font-semibold text-slate-500'>HSR - Sector 6</p>
                                <p className='font-base text-slate-500'>HSR Sector, Bangalore</p>
                                <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-5">
                        <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property5" className="w-full h-[45vh]" />
                            <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                                BOOK NOW
                            </button>
                            <div className="text-center px-5 py-3 z-10 bg-slate-100">
                                <p className='font-semibold text-slate-500'>Whitefield - Nallurhalli</p>
                                <p className='font-base text-slate-500'>Whitefield, Bangalore</p>
                                <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc((100vw-60px)/3)] mb-5 px-5">
                        <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property5" className="w-full h-[45vh]" />
                            <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                                BOOK NOW
                            </button>
                            <div className="text-center px-5 py-3 z-10 bg-slate-100">
                                <p className='font-semibold text-slate-500'>Whitefield - Channasandra</p>
                                <p className='font-base text-slate-500'>Whitefield, Bangalore</p>
                                <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className={`${marginTop ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-7' : 'hidden'}`}>
                <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={publicUrl + "assets/img/product/property-img1.webp"} alt="Property1" className="w-full h-[45vh]" />
                    <Link to="/enquiry" className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm' type='button' onClick={() => window.scrollTo(0, 0)}>
                        BOOK NOW
                    </Link>
                    <div className="text-center px-5 py-3 z-10 bg-slate-100">
                        <p className='font-semibold text-slate-500'>StayEase Hive Harmonia</p>
                        <p className='font-base text-slate-500'>Electronic City, Bangalore</p>
                        <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: ₹8999</p>
                    </div>
                </div>

                <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property2" className="w-full h-[45vh]" />
                    <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                        BOOK NOW
                    </button>
                    <div className="text-center px-5 py-3 z-10 bg-slate-100">
                        <p className='font-semibold text-slate-500'>Koramangala - Ashwini Layout</p>
                        <p className='font-base text-slate-500'>Koramangala, Bangalore</p>
                        <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property3" className="w-full h-[45vh]" />
                    <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                        BOOK NOW
                    </button>
                    <div className="text-center px-5 py-3 z-10 bg-slate-100">
                        <p className='font-semibold text-slate-500'>Koramangala - Sony Signal</p>
                        <p className='font-base text-slate-500'>Koramangala, Bangalore</p>
                        <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property4" className="w-full h-[45vh]" />
                    <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                        BOOK NOW
                    </button>
                    <div className="text-center px-5 py-3 z-10 bg-slate-100">
                        <p className='font-semibold text-slate-500'>Koramangala - Water Tank</p>
                        <p className='font-base text-slate-500'>Koramangala, Bangalore</p>
                        <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property5" className="w-full h-[45vh]" />
                    <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                        BOOK NOW
                    </button>
                    <div className="text-center px-5 py-3 z-10 bg-slate-100">
                        <p className='font-semibold text-slate-500'>HSR - Sector 1</p>
                        <p className='font-base text-slate-500'>HSR Sector, Bangalore</p>
                        <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property5" className="w-full h-[45vh]" />
                    <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                        BOOK NOW
                    </button>
                    <div className="text-center px-5 py-3 z-10 bg-slate-100">
                        <p className='font-semibold text-slate-500'>HSR - Sector 4</p>
                        <p className='font-base text-slate-500'>HSR Sector, Bangalore</p>
                        <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property5" className="w-full h-[45vh]" />
                    <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                        BOOK NOW
                    </button>
                    <div className="text-center px-5 py-3 z-10 bg-slate-100">
                        <p className='font-semibold text-slate-500'>HSR - Sector 6</p>
                        <p className='font-base text-slate-500'>HSR Sector, Bangalore</p>
                        <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property5" className="w-full h-[45vh]" />
                    <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                        BOOK NOW
                    </button>
                    <div className="text-center px-5 py-3 z-10 bg-slate-100">
                        <p className='font-semibold text-slate-500'>Whitefield - Nallurhalli</p>
                        <p className='font-base text-slate-500'>Whitefield, Bangalore</p>
                        <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                    </div>
                </div>

                <div className="relative bg-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={publicUrl + "assets/img/product/property-img-sample.webp"} alt="Property5" className="w-full h-[45vh]" />
                    <button className='absolute top-8 right-4 bg-lime-500 text-white px-3 py-1 text-sm'>
                        BOOK NOW
                    </button>
                    <div className="text-center px-5 py-3 z-10 bg-slate-100">
                        <p className='font-semibold text-slate-500'>Whitefield - Channasandra</p>
                        <p className='font-base text-slate-500'>Whitefield, Bangalore</p>
                        <p className='border border-slate-300 text-sm rounded-lg mt-3 py-2 bg-white'>Price Per Night: N/A</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductSlider
