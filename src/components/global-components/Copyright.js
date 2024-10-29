import React from 'react'
import { Link } from 'react-router-dom'

const Copyright = () => {
    return (
        <div className="bg-[#282b38] px-10 md:px-20 py-8">
            <div className="flex flex-col md:flex-row justify-between text-white">
                <div className="text-center">
                    <p>All Rights Reserved @ Company</p>
                </div>
                <div className="pt-3 md:py-0">
                    <ul className="flex justify-between md:space-x-5">
                        <li><Link className='font-semibold hover:text-amber-400' to="">Terms &amp; Conditions</Link></li>
                        <li><Link className='font-semibold hover:text-amber-400' to="">Claim</Link></li>
                        <li><Link className='font-semibold hover:text-amber-400' to="">Privacy &amp; Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Copyright
