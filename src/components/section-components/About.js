import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const About = ({ property, marginBottom }) => {
    let publicUrl = process.env.PUBLIC_URL + '/'

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

    return (
        <section className={`px-3 md:px-20 lg:px-24 ${marginBottom ? marginBottom : 'py-[4rem] md:py-[5rem] lg:py-[3rem]'}`}>
            <div className='flex flex-col lg:flex-row lg:space-x-20'>
                <div className='md:h-[90vh]'>
                    <img src={publicUrl + "assets/img/about-us/aboutUs_img.jpg"} alt="AboutUsImage" className='w-[100%] h-[70] md:h-[90vh] lg:w-[45vw]' />
                </div>

                <div className="relative lg:w-[44vw] md:h-[38vh] lg:h-[90vh]">
                    <div ref={ref} className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} transition-all absolute top-10 md:top-[20%] lg:top-52`}>
                        <span className='rounded-full px-4 py-1 bg-yellow-100 text-amber-500'>About Us</span>
                        <p className='my-5 text-gray-500'>At Stayease, we're redefining the co-living experience by providing our guests with fully furnished, high-end, and affordable co-living spaces, catering to all types of people. We focus on ensuring top-quality stays, where we take care of all your needs. Find your perfect fit, from studios to shared spaces, all designed for comfort and community. </p>

                        <div className={`mt-8 ${property ? property : ''}`}>
                            <button className="relative group border hover:border-black py-5 px-8 bg-amber-400 text-white transition-all duration-500 ease-in-out">
                                <Link to="/about" className="relative z-10 text-white text-center p-4 transition-all duration-500 ease-in-out group-hover:text-black" onClick={() => window.scrollTo(0, 0)}>
                                    READ MORE
                                </Link>
                                <div className="absolute inset-0 bg-white transform scale-x-0 origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
