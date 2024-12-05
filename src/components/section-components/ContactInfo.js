import React from 'react'
import { BsTelephone } from "react-icons/bs"
import { GrLocation } from "react-icons/gr"
import { MdOutlineMailOutline } from "react-icons/md"
import { Link } from 'react-router-dom'

const ContactInfo = () => {
    return (
        <section className="p-10 md:p-24 my-24">
            <div className="flex flex-col md:flex-row">
                <Link to={`mailto:hello@mystayease.com`} target="_blank" className="relative py-10 md:w-[35vw] text-center mb-32 md:mb-10">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-max">
                        <div className="mb-[35px]">
                            <span className='text-8xl max-w-[80px] text-[#eba312]'><MdOutlineMailOutline /></span>
                        </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                        <h3>Email Address</h3>
                        <p>hello@mystayease.com</p>
                    </div>
                </Link>

                <Link to={`https://wa.me/9164648787`} target="_blank" className="relative py-10 md:w-[35vw] text-center mb-32 md:mb-10">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-max">
                        <div className="mb-[35px]">
                            <span className='text-8xl max-w-[80px] text-[#eba312]'><BsTelephone /></span>
                        </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                        <h3>Phone Number</h3>
                        <p>+91 91 6464 8787</p>
                    </div>
                </Link>

                <Link to={`https://www.google.com/maps?q=${encodeURIComponent('No. 216, 215, 3rd Cross, Off Neeladri Road, Electronic City Phase 1, Bengaluru 560100')}`} target="_blank" rel="noopener noreferrer" className="relative py-10 md:w-[35vw] text-center mb-10">
                < div className = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-max" >
                <div className="mb-[35px]">
                    <span className='text-8xl max-w-[80px] text-[#eba312]'><GrLocation /></span>
                </div>
                    </div>
            <div className="absolute top-full left-[10%] right-[10%]">
                <h3>Office Address</h3>
                <p>Estanzia Ease Private Limited <br />No. 216,215, 3rd Cross, Off Neeladri Road, Electronic City Phase 1, Bengaluru 560100</p>
            </div>
        </Link>
            </div >
        </section >
    )
}

export default ContactInfo
