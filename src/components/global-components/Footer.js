import React from 'react'
import { Link } from 'react-router-dom'
import Copyright from './Copyright';

const Footer = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    return (
        <footer className="bg-[#171b2a]">
            <div className='p-5 md:p-20'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-6 text-white'>
                    <div className="md:col-span-2 mb-5 md:mb-0">
                        <div className="">
                            <div className="">
                                <img src={publicUrl + "assets/img/brand-logo/stayEase-Logo.webp"} alt="Logo" />
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
                                        <p><Link to='' className='hover:text-amber-400' href="tel:+91 91 6464 8787">+91 91 6464 8787</Link></p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex justify-left space-x-8 mt-5 ps-3 md:ps-4">
                            <div><Link to='' title="Facebook"><i className="text-2xl text-white hover:text-amber-400 fab fa-facebook-f" /></Link></div>
                            <div><Link to='' title="Twitter"><i className="text-2xl text-white hover:text-amber-400 fab fa-twitter" /></Link></div>
                            <div><Link to='' title="Instagram"><i className="text-2xl text-white hover:text-amber-400 fab fa-instagram" /></Link></div>
                        </div>
                    </div>

                    <div className="">
                        <h4 className="text-2xl font-semibold md:font-bold">Company</h4>
                        <div className="mt-5">
                            <ul>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/properties" onClick={() => window.scrollTo(0, 0)}>Our Properties</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/blog" onClick={() => window.scrollTo(0, 0)}>Blog</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <h4 className="text-2xl font-semibold md:font-bold">Services</h4>
                        <div className="mt-5">
                            <ul>
                                {/* <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/cart">Cart</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/wishlist">Wish List</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/login">Login</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/checkout">Checkout</Link></li> */}
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="">Terms &amp; Conditions</Link></li>
                                {/* <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/shop">Promotional Offers</Link></li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <h4 className="text-2xl font-semibold md:font-bold">Customer Care</h4>
                        <div className="mt-5">
                            <ul>
                                {/* <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/login">Login</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/my-account">My account</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/wishlist">Wish List</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/add-listing">Add listing</Link></li> */}
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="">FAQ</Link></li>
                                <li className='mb-5'><Link className='font-base md:font-semibold hover:text-amber-400' to="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    )
}

export default Footer
