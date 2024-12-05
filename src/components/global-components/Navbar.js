import React, { useState, useEffect, useCallback } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Properties', to: '/properties' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [isScrolledUp, setIsScrolledUp] = useState(true)
    const [lastScrollPosition, setLastScrollPosition] = useState(0)
    const location = useLocation()

    const handleScroll = useCallback(() => {
        const currentScrollPosition = window.pageYOffset

        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 80) {
            setIsScrolledUp(false)
        } else if (currentScrollPosition < lastScrollPosition) {
            setIsScrolledUp(true)
        }

        setLastScrollPosition(currentScrollPosition)
    }, [lastScrollPosition])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollPosition, handleScroll])

    return (
        <Disclosure as="nav" className={`bg-[#000000] border-b-2 border-[#eba312] shadow fixed w-full top-0 z-[100] transition-opacity duration-300 ${isScrolledUp ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-24 p-2">
                <div className="flex justify-around items-center">
                    {/* Logo */}
                    <div>
                        <img
                            alt="CompanyLogo"
                            src="assets/img/brand-logo/stayEase-Logo.webp"
                            className="h-18 w-auto object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="flex space-x-4">
                            {navigation.map((item) => {
                                const isActive = location.pathname === item.to

                                return (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        aria-current={isActive ? 'page' : undefined}
                                        className={classNames(
                                            isActive ? 'text-[0.9rem] lg:text-[1rem] text-[#eba312]' : 'text-[0.9rem] lg:text-[1rem] text-white hover:text-[#eba312]',
                                            'rounded-md px-3 py-2 font-medium'
                                        )}
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className='hidden md:block'>
                        <div className="flex space-x-8">
                            <div><Link to="https://www.facebook.com/stayeasee?mibextid=ZbWKwL" target='_blank' title="Facebook"><i className="text-2xl text-white hover:text-[#eba312] fab fa-facebook-f" /></Link></div>
                            <div><Link to="https://www.instagram.com/stayease_/" target='_blank' title="Instagram"><i className="text-2xl text-white hover:text-[#eba312] fab fa-instagram" /></Link></div>
                            <div><Link to="https://www.linkedin.com/company/stayease/" target='_blank' title="LinkedIn"><i className="text-2xl text-white hover:text-[#eba312] fab fa-linkedin" /></Link></div>
                        </div>
                    </div>

                    <div className="flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 border-2 border-white text-white hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.to

                        return (
                            <Link
                                key={item.name}
                                to={item.to}
                                aria-current={isActive ? 'page' : undefined}
                                className={classNames(
                                    isActive ? 'text-[1rem] bg-[#282b38] text-[#eba312]' : 'text-white hover:bg-[#282b38] hover:text-[#eba312]',
                                    'block rounded-md px-3 py-2 text-[1rem] font-medium'
                                )}
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </div>
                
                <div className='md:hidden'>
                    <div className="flex flex justify-left space-x-8 px-8 pb-5 pt-5">
                        <div><Link to="https://www.facebook.com/stayeasee?mibextid=ZbWKwL" target='_blank' title="Facebook"><i className="text-2xl text-white hover:text-[#eba312] fab fa-facebook-f" /></Link></div>
                        <div><Link to="https://www.instagram.com/stayease_/" target='_blank' title="Instagram"><i className="text-2xl text-white hover:text-[#eba312] fab fa-instagram" /></Link></div>
                        <div><Link to="https://www.linkedin.com/company/stayease/" target='_blank' title="LinkedIn"><i className="text-2xl text-white hover:text-[#eba312] fab fa-linkedin" /></Link></div>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
