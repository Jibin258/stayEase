import React, { useState, useEffect, useCallback } from 'react'
import MapComponent from './MapComponent'
import IconSlider from './IconSlider'

const SlideshowGallery = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const [slideIndex, setSlideIndex] = useState(1)

    const slides = [
        { src: publicUrl + "assets/img/enquiry/enquiry_img1.jpg", alt: 'Hall' },
        { src: publicUrl + "assets/img/enquiry/enquiry_img2.jpg", alt: 'Dining' },
        { src: publicUrl + "assets/img/enquiry/enquiry_img3.jpg", alt: 'Kitchen' },
        { src: publicUrl + "assets/img/enquiry/enquiry_img4.jpg", alt: 'Bedroom' },
        { src: publicUrl + "assets/img/enquiry/enquiry_img5.jpg", alt: 'Sitout' },
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
        <div className='flex justify-between bg-white p-3 border border-slate-200'>
            <div className='font-semibold text-slate-500'>1 RK Shared Room</div>
            <div className='font-semibold'>Rs. 14500/mo*</div>
        </div>
        <div className='flex justify-between bg-white p-3 border border-slate-200 mt-3'>
            <div className='font-semibold text-slate-500'>1 RK Private Room</div>
            <div className='font-semibold'>Rs. 14500/mo*</div>
        </div>

        <p className='text-xs text-left mt-5'>
            Additional GST Applicable
        </p>
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
        <section className='pt-20 md:pt-25'>
            <div className="mx-auto text-center py-10 md:p-24">

                <div className="flex flex-col md:flex-row md:space-x-20">
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
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-[2rem] mb-[4rem]">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot cursor-pointer w-2 h-2 mx-1 rounded-full ${slideIndex === index + 1 ? 'bg-amber-500' : 'bg-gray-300'}`}
                            onClick={() => currentSlide(index + 1)}
                        ></span>
                    ))}
                </div>


                <div className='flex flex-col lg:flex-row md:space-x-20'>
                    <div className='lg:w-[50vw]'>
                        <div className='p-3 lg:p-8 text-left rounded-lg lg:border md:border-slate-200 md:mt-0 m-5'>
                            <h3 className='text-2xl font-semibold my-3 text-slate-500'>Hive Harmonia (Electronic City, Bangalore)</h3>
                            <p className='text-gray-500'>
                                We go beyond just offering stylish, fully furnished rooms and apartments. We provide a comprehensive package of offerings and amenities designed to simplify your living experience at Stayease. These are just a few of the offerings that set us apart. We're committed to providing you with everything you need to live at complete convenience.
                            </p>
                        </div>

                        <div className="p-10 bg-slate-100 rounded-lg shadow-custom m-5 lg:hidden">
                            {priceBoard}
                        </div>

                        <div className='p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5'>
                            <h3 className='text-xl font-semibold my-5 text-slate-500'>Address</h3>
                            <p className='text-gray-500'>
                                No 215, 216, 3rd Cross Road, off Neeladri Road, Neeladri Nagar, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100
                            </p>
                            <MapComponent />
                        </div>

                        <div className='p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5'>
                            <IconSlider />
                        </div>

                        <div className='p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5'>
                            <h3 className='text-xl font-semibold my-5 text-slate-500'>Basic House Rules For Comfortable Stay</h3>
                            <ul className='text-gray-500'>
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

                        <div className="p-10 bg-slate-100 rounded-lg shadow-custom m-5 lg:hidden">
                            {enquiryBoard}
                        </div>
                    </div>

                    <div className="relative md:m-0 hidden lg:block lg:w-[40vw]">
                        <div className='sticky top-10 pb-6'>
                            <div className="p-10 bg-slate-100 rounded-lg shadow-custom mb-10">
                                {priceBoard}
                            </div>

                            <div className="p-10 bg-slate-100 rounded-lg shadow-custom">
                                {enquiryBoard}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SlideshowGallery
