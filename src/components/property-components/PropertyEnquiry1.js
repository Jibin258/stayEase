import React, { useState, useEffect, useCallback } from 'react'
import MapComponent from './MapComponent'
import IconSlider from './IconSlider'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PropertyEnquiry1 = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const [slideIndex, setSlideIndex] = useState(1)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
    };

    const slides = [
        { src: publicUrl + "assets/img/enquiry/enquiry_img1.webp", alt: 'Hall' },
        { src: publicUrl + "assets/img/enquiry/enquiry_img2.webp", alt: 'Dining' },
        { src: publicUrl + "assets/img/enquiry/enquiry_img3.webp", alt: 'Kitchen' },
        { src: publicUrl + "assets/img/enquiry/enquiry_img4.webp", alt: 'Bedroom' },
        { src: publicUrl + "assets/img/enquiry/enquiry_img5.webp", alt: 'Sitout' },
    ]

    const communityImages = [
        [
            publicUrl + "assets/img/community/community_img1.webp",
            publicUrl + "assets/img/community/community_img2.webp",
            publicUrl + "assets/img/community/community_img3.webp"
        ],
        [
            publicUrl + "assets/img/community/community_img4.webp",
            publicUrl + "assets/img/community/community_img5.webp",
            publicUrl + "assets/img/community/community_img6.webp"
        ],
        [
            publicUrl + "assets/img/community/community_img7.webp",
            publicUrl + "assets/img/community/community_img8.webp",
            publicUrl + "assets/img/community/community_img9.webp"
        ]
    ]

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

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

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)

        setFormData({
            name: '',
            phone: '',
            email: ''
        })
    }

    const priceBoard = <>
        <div className='flex justify-between p-3 border border-[#eba312]'>
            <div className='font-semibold'>1 RK Shared Room</div>
            <div className='font-semibold'>Rs. 14500/mo*</div>
        </div>
        <div className='flex justify-between p-3 border border-[#eba312] mt-3'>
            <div className='font-semibold'>1 RK Private Room</div>
            <div className='font-semibold'>Rs. 14500/mo*</div>
        </div>

        {/* <p className='text-xs text-left mt-5'>
            Additional GST Applicable
        </p> */}
    </>

    const enquiryBoard = <>
        <h2 className="text-2xl font-semibold">Book Your Visit Today</h2>

        <form onSubmit={handleSubmit} className='text-left mt-3'>
            <div className="mb-3">
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="border rounded w-full py-2 px-3" />
            </div>

            <div className="mb-3">
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="border rounded w-full py-2 px-3" />
            </div>

            <div className="mb-5">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="border rounded w-full py-2 px-3" />
            </div>

            <button type="submit" className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600">
                Submit
            </button>
        </form>
    </>

    return (
        <section className='pt-20 md:pt-[6rem]'>
            <div className="mx-auto text-center py-10 md:p-[4rem]">

                <div className="flex flex-col md:flex-row md:space-x-20 lg:mx-5">
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
                                        loading="eager"
                                    />

                                    <div className="numbertext absolute top-0 left-0 text-white p-2 text-sm opacity-0 group-hover:opacity-90">
                                        {index + 1} / {slides.length}
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

                    <div className="flex justify-center hidden lg:block">
                        {slides.map((thumb, index) => (
                            <div key={index} className="">
                                <img
                                    className={`demo cursor-pointer w-full h-[8vh] lg:h-[15vh] object-cover ${slideIndex === index + 1 ? 'opacity-100' : 'opacity-60'}`}
                                    src={thumb.src}
                                    alt={thumb.alt}
                                    onClick={() => currentSlide(index + 1)}
                                    loading="eager"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-[2rem] md:mb-[2rem] lg:mb-[4rem]">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot cursor-pointer w-2 h-2 mx-1 rounded-full ${slideIndex === index + 1 ? 'bg-amber-500' : 'bg-gray-300'}`}
                            onClick={() => currentSlide(index + 1)}
                        ></span>
                    ))}
                </div>


                <div className='flex flex-col lg:flex-row md:space-x-10'>
                    <div className='lg:w-[55vw]'>
                        <div className='p-3 lg:p-8 text-left rounded-lg lg:border md:border-slate-200 md:mt-0 m-5'>
                            <h3 className='text-2xl font-semibold my-3'>Stayease Harmonia (Electronic City, Bangalore)</h3>
                            <p>
                                We go beyond just offering stylish, fully furnished rooms and apartments. We provide a comprehensive package of offerings and amenities designed to simplify your living experience at Stayease. These are just a few of the offerings that set us apart. We're committed to providing you with everything you need to live at complete convenience.
                            </p>
                        </div>

                        <div className="p-10 border border-[#eba312] rounded-lg m-5 lg:hidden">
                            {priceBoard}
                        </div>

                        <div className='p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5'>
                            <h3 className='text-xl font-semibold my-5'>Address</h3>
                            <p>
                                No 215, 216, 3rd Cross Road, off Neeladri Road, Neeladri Nagar, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100
                            </p>
                            <MapComponent />
                        </div>

                        <div className='p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5'>
                            <IconSlider />
                        </div>

                        <div className='p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5'>
                            <h3 className='text-xl font-semibold my-5'>About StayEase Community</h3>

                            <ul className='mt-[3.5rem]'>
                                <li className='mb-[3rem] md:mb-[5rem] lg:mb-[4rem] xl:mb-20 flex flex-col md:flex-row lg:flex-col xl:flex-row md:space-x-10 lg:space-x-1 xl:space-x-10'>
                                    <Slider {...settings} className='md:w-[40vw] lg:w-[100%] xl:w-[25vw]'>
                                        {communityImages[0].map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`Slide_${index + 1}`}
                                                className="md:w-full lg:w-full xl:w-full md:h-[45vh] lg:h-[45vh] xl:h-[40vh] object-cover"
                                                loading="lazy"
                                            />
                                        ))}
                                    </Slider>

                                    <div className='md:text-[1.5vw] lg:text-base md:w-[100vw] lg:w-[45vw] xl:w-[100vw] mt-8 md:mt-8 lg:mt-8 xl:mt-9'>
                                        <h3 className='md:text-[1.8vw] lg:text-lg font-semibold mb-5 font-semibold mb-5'>A Spectrum Of Experiences</h3>
                                        StayEase isn’t just a place to live, it’s a vibrant community where different backgrounds and perspectives come together. Experience the richness of diverse lives in our coliving spaces. StayEase offers more than just a room - it’s a gateway to a colorful community.
                                    </div>
                                </li>

                                <li className='mb-[3rem] md:mb-[5rem] lg:mb-[4rem] xl:mb-20 flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row md:space-x-5 lg:space-x-1 xl:space-x-10'>
                                    <div className='md:text-[1.5vw] lg:text-base md:w-[100vw] lg:w-[100%] xl:w-[100vw] mt-8 md:mt-8 lg:mt-8 xl:mt-9'>
                                        <h3 className='md:text-[1.8vw] lg:text-lg font-semibold mb-5'>Connect & Collaborate</h3>
                                        Our shared spaces are the heart and soul of StayEase. More than just functional areas, our common areas and communal lounges are where connections are forged. Whether you're sharing a coffee or a competitive game night, these are the places where our community truly comes alive.
                                    </div>

                                    <Slider {...settings} className='md:w-[40vw] lg:w-[100%] xl:w-[25vw]'>
                                        {communityImages[1].map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`Slide_${index + 1}`}
                                                className="md:w-full lg:w-full xl:w-full md:h-[45vh] lg:h-[45vh] xl:h-[40vh] object-cover"
                                                loading="lazy"
                                            />
                                        ))}
                                    </Slider>
                                </li>

                                <li className='mb-5 flex flex-col md:flex-row lg:flex-col xl:flex-row md:space-x-5 lg:space-x-1 xl:space-x-10'>
                                    <Slider {...settings} className='md:w-[40vw] lg:w-[100%] xl:w-[25vw]'>
                                        {communityImages[2].map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`Slide_${index + 1}`}
                                                className="md:w-full lg:w-full xl:w-full md:h-[45vh] lg:h-[45vh] xl:h-[40vh] object-cover"
                                                loading="lazy"
                                            />
                                        ))}
                                    </Slider>

                                    <div className='md:text-[1.5vw] lg:text-base md:w-[100vw] lg:w-[100%] xl:w-[100vw] mt-8 md:mt-0 lg:mt-8 xl:mt-6'>
                                        <h3 className='md:text-[1.8vw] lg:text-lg font-semibold mb-5'>Build Long Lasting Bondings</h3>
                                        StayEase is where fun and community collide. Our coliving spaces are hubs of activity, filled with events that bring residents together. From vibrant celebrations to casual get-togethers, we create opportunities to bond and build lasting friendships. Let's connect, share, and create unforgettable memories together.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5'>
                            <h3 className='text-xl font-semibold my-5'>Neighbourhood from Harmonia</h3>

                            <div className="flex flex-wrap md:justify-center mb-5">
                                <div className="p-1 w-1/2 sm:w-1/2 md:w-1/4">
                                    <img src={publicUrl + 'assets/img/neighbourhood/neighbourhood_img1.webp'} alt="Image_1" className="w-full h-[50%] mt-2 object-cover" loading="lazy" />
                                    <img src={publicUrl + 'assets/img/neighbourhood/neighbourhood_img7.webp'} alt="Image_2" className="w-full h-[50%] mt-2 object-cover" loading="lazy" />
                                </div>

                                <div className="p-1 w-1/2 sm:w-1/2 md:w-1/4">
                                    <img src={publicUrl + 'assets/img/neighbourhood/neighbourhood_img6.webp'} alt="Image_3" className="w-full h-[50%] mt-2 object-cover" loading="lazy" />
                                    <img src={publicUrl + 'assets/img/neighbourhood/neighbourhood_img4.webp'} alt="Image_4" className="w-full h-[50%] mt-2 object-cover" loading="lazy" />
                                </div>

                                <div className="p-1 w-1/2 sm:w-1/2 md:w-1/4">
                                    <img src={publicUrl + 'assets/img/neighbourhood/neighbourhood_img2.webp'} alt="Image_5" className="w-full h-[50%] mt-2 object-cover" loading="lazy" />
                                    <img src={publicUrl + 'assets/img/neighbourhood/neighbourhood_img8.webp'} alt="Image_6" className="w-full h-[50%] mt-2 object-cover" loading="lazy" />
                                </div>

                                <div className="p-1 w-1/2 sm:w-1/2 md:w-1/4">
                                    <img src={publicUrl + 'assets/img/neighbourhood/neighbourhood_img5.webp'} alt="Image_7" className="w-full h-[50%] mt-2 object-cover" loading="lazy" />
                                    <img src={publicUrl + 'assets/img/neighbourhood/neighbourhood_img3.webp'} alt="Image_8" className="w-full h-[50%] mt-2 object-cover" loading="lazy" />
                                </div>
                            </div>


                        </div>

                        <div className='p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5'>
                            <h3 className='text-xl font-semibold my-5'>Basic House Rules For Comfortable Stay</h3>
                            <ul>
                                <li className='mb-5'>
                                    <span className='font-semibold'>Move-in/Move-out:</span>&nbsp; Move-in is permitted after 3:00 PM and move-out must be completed before 10:00 AM. Keep valuables locked. Management is not responsible for lost or stolen items. CCTV footage for common areas is available upon request (up to 10 days). Delivery personnel are not allowed inside.
                                </li>
                                <li className='mb-5'>
                                    <span className='font-semibold'>Guest Policy:</span>&nbsp; Only single or full occupancy is allowed, subject to approval and as outlined in the agreement. Guests are strictly prohibited in double or shared occupancy.Conserve water and electricity. Maintain cleanliness in your room and common areas.
                                </li>
                                <li className='mb-5'>
                                    <span className='font-semibold'>Repairs & Electricity:</span>&nbsp; A cool-off period applies before repair costs become your responsibility (see agreement). Costs are shared for shared accommodations. Electricity is pay-as-you-go with smart meters, including power backup. Report maintenance issues immediately.
                                </li>
                                <li className='mb-5'>
                                    <span className='font-semibold'>Noise & Substances:</span>&nbsp; Maintain low noise levels in rooms and common areas. Smoking and drinking are prohibited in common areas with a ₹1000 fine for the first offense and potential eviction for repeated violations. Drugs are strictly prohibited, resulting in eviction and police reporting.
                                </li>
                            </ul>
                        </div>

                        <div className="p-10 rounded-lg border border-[#eba312] m-5 lg:hidden">
                            {enquiryBoard}
                        </div>
                    </div>

                    <div className="relative md:m-0 hidden lg:block lg:w-[40vw]">
                        <div className='sticky top-10 pb-5'>
                            <div className="p-10 border border-[#eba312] rounded-lg mb-10">
                                {priceBoard}
                            </div>

                            <div className="p-10 border border-[#eba312] rounded-lg shadow-custom">
                                {enquiryBoard}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyEnquiry1
