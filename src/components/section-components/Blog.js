import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const images = [
        publicUrl + "assets/img/blog/blog_img2.webp",
    ]

    return (
        <div className="pt-[3rem] md:pt-[4.5rem] pb-[1rem] md:pb-[2rem]">
            <div className='text-center mb-5'>
                <h1 className="text-2xl md:text-3xl font-semibold my-3 md:my-5">Top Reads</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-5 px-3 md:px-5 lg:px-8">
                {images.map((src, imgIndex) => (
                    <Link to='/blog/top-benefits-of-co-living-or-sharing-accommodation-for-millennials-in-bangalore' onClick={() => window.scrollTo(0, 0)} key={imgIndex}>
                        <img src={src} alt={`Image_${imgIndex + 1}`} className="w-full h-[35vh] mt-5 object-cover" loading="lazy" />
                        <div className='mb-10 px-1 pt-3'>
                            <p className='text-xs mb-3'>Sep 8</p>
                            <h3 className='font-bold text-xl mb-3'>Top Benefits of Co-Living or Sharing Accommodation for Millennials in Bangalore</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Blog
