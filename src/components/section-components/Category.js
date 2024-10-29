import React, { useState, useEffect, useRef } from 'react'
import { IoLocation } from "react-icons/io5";
import { RiSofaFill } from "react-icons/ri";
import { LuParkingCircle } from "react-icons/lu";
import { MdOutlineCleaningServices } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { TbDeviceCctv } from "react-icons/tb";
import { GiWashingMachine } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { CgCommunity } from "react-icons/cg";
import { FaHouseLock } from "react-icons/fa6";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { SiIntercom } from "react-icons/si";

const Category = () => {
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
        <div className='py-8 md:py-5 px-5 md:px-[6rem] lg:px-24'>
            <div className='text-center mb-10'>
                <span className="rounded-full px-4 py-1 bg-yellow-100 text-amber-500">Our Aminities</span>
                <h1 className="text-2xl md:text-3xl font-bold my-5">Building Aminities</h1>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><IoLocation /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">Prime Locations</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><RiSofaFill /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">Fully Furnished</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><LuParkingCircle /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">Parking Space</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><MdOutlineCleaningServices /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">Regular Housekeeping</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><FaWifi /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">Free Wi-Fi</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><FaKitchenSet /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">Modular Kitchen</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><TbDeviceCctv /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">CCTV Surveillance</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><GiWashingMachine /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">Washing Machine</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><BsPersonWorkspace /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">Workspace Setup</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><CgCommunity /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">Common Area</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><FaHouseLock /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">Digital Lock Access</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><FaHandHoldingWater /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">Water Purifier</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><MdLiveTv /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">OTT Subscriptions</span>
                </div>

                <div className="relative h-[20vh] md:h-[28vh] lg:h-[30vh] w-[100%] rounded-lg hover:bg-[#f7b600] hover:text-white transition duration-500 text-center shadow-custom">
                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-[#fff2f0] rounded-full">
                        <span className="text-4xl md:text-7xl text-[#f7b600]"><SiIntercom /></span>
                    </div>
                    <span className="absolute top-[83%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-bold">Community Intercom</span>
                </div>
            </div>

            <div ref={ref} className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} transition-all mt-10 md:ps-8 lg:pe-[30rem] md:border-l-2 border-gray-700 w-full max-w-max`}>
                <p className='text-gray-500'>
                    We go beyond just offering stylish, fully furnished rooms and apartments. We provide a comprehensive package of offerings and amenities designed to simplify your living experience at Stayease. These are just a few of the offerings that set us apart. We're committed to providing you with everything you need to live at complete convenience.
                </p>
            </div>
        </div>
    )
}

export default Category
