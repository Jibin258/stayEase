import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    return (
        <footer className="border-t-2 border-[#eba312]">
            <div className='p-5 md:p-20'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-5 text-white'>
                    <div className="md:col-span-3 mb-5 md:mb-0">
                        <div className="">
                            <div className="">
                                <img src={publicUrl + "assets/img/brand-logo/stayEase-Logo.webp"} className='object-cover' loading="lazy" alt="CompanyLogo" />
                            </div>
                        </div>

                        <div className="mt-3 ps-3 md:ps-4">
                            <ul>
                                <li className='mb-5'>
                                    <div className="flex space-x-5 pe-20">
                                        <i className="text-xl fa-solid fa-location-dot"></i>
                                        <p>​No. 216,215, 3rd Cross, Off Neeladri Road, Electronic City Phase 1, Bengaluru 560100</p>
                                    </div>
                                </li>

                                <li className='mb-5'>
                                    <div className="flex space-x-4">
                                        <i className="text-xl fa-solid fa-phone"></i>
                                        <p><Link to={`https://wa.me/9164648787`} className='hover:text-[#eba312]'>+91 91 6464 8787</Link></p>
                                    </div>
                                </li>

                                <li className='mb-5'>
                                    <div className="flex space-x-4">
                                        <i className="text-xl far fa-envelope"></i>
                                        <p><Link to={`mailto:hello@mystayease.com`} className='hover:text-[#eba312]'>hello@mystayease.com</Link></p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex justify-left space-x-8 mt-5 ps-3 md:ps-4">
                            <div><Link to="https://www.facebook.com/stayeasee?mibextid=ZbWKwL" target='_blank' title="Facebook"><i className="text-2xl text-white hover:text-[#eba312] fab fa-facebook-f" /></Link></div>
                            <div><Link to="https://www.instagram.com/stayease_/" target='_blank' title="Instagram"><i className="text-2xl text-white hover:text-[#eba312] fab fa-instagram" /></Link></div>
                            <div><Link to="https://www.linkedin.com/company/stayease/" target='_blank' title="LinkedIn"><i className="text-2xl text-white hover:text-[#eba312] fab fa-linkedin" /></Link></div>
                        </div>
                    </div>

                    <div className="">
                        <h4 className="text-2xl font-semibold md:font-bold">Company</h4>
                        <div className="mt-5">
                            <ul>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-[#eba312]' to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-[#eba312]' to="/properties" onClick={() => window.scrollTo(0, 0)}>Our Properties</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-[#eba312]' to="/blog" onClick={() => window.scrollTo(0, 0)}>Blog</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-[#eba312]' to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <h4 className="text-2xl font-semibold md:font-bold">Services</h4>
                        <div className="mt-5">
                            <ul>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-[#eba312]' to="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-[#eba312]' to="/Terms-conditions" onClick={() => window.scrollTo(0, 0)}>Terms &amp; Conditions</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-[#eba312]' to="/privacy-policy">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-8 text-center text-sm">
                <p>All Rights Reserved @ Company</p>
            </div>
        </footer>
    )
}

export default Footer
