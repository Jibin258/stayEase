import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({ scrollToEnquiry }) => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    return (
        <section className='bg-[#f2f6f7] pt-10 lg:pt-20 lg:mb-[3rem]'>
            <div className='flex flex-col lg:flex-row justify-around px-3 py-10 md:p-20 lg:p-24'>
                <div className='my-10 lg:mt-[8rem]'>
                    <h1 className="text-2xl md:text-4xl font-semibold animate-slide-up">EXPERIENCE CO-LIVING LIKE NEVER BEFORE!</h1>
                    <div className='mt-8 ps-8 border-l-2 border-gray-700 w-full max-w-max animate-slide-up'>
                        <p className='text-gray-500 w-9/12'>Experience a new way of living with a vibrant community and all-inclusive amenities designed for modern lifestyles.</p>
                    </div>

                    <div className="mt-8 animate-slide-up">
                        <button className="relative group border hover:border-black py-5 px-8 bg-amber-400 text-white transition-all duration-500 ease-in-out">
                            <Link onClick={scrollToEnquiry} className="relative z-10 text-white text-center p-4 transition-all duration-500 ease-in-out group-hover:text-black">
                                Make An Enquiry
                            </Link>
                            <div className="absolute inset-0 bg-white transform scale-x-0 origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
                        </button>
                    </div>

                </div>
                <div className="h-[53vh] md:h-[70vh]">
                    <img src={publicUrl + "assets/img/banner/banner_img.jpg"} alt="#" className='w-[100%] h-[50vh] lg:w-[45vw] md:h-[70vh]' />
                </div>
            </div>
        </section>
    )
}

export default Banner
