import React, { useState, forwardRef } from 'react'
import axios from 'axios'

const EnquirySection = forwardRef((props, ref) => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comments: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setFormData({
            name: '',
            phone: '',
            email: '',
            comments: ''
        })

        try {
            const res = await axios.post('/normal-enquiry', formData);
            alert(res.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <section ref={ref} className='py-8 md:pt-[1rem] lg:px-24 mb-[30rem] md:mb-[2.5rem] lg:mb-[5rem]'>
            <div className='text-center mb-[3rem]'>
                <h1 className="text-2xl md:text-3xl font-semibold my-5">Send Us Your Enquiry</h1>
            </div>

            <div className='flex flex-col lg:flex-row lg:space-x-20'>
                <div className='relative lg:h-[90vh] hidden lg:block'>
                    <img src={publicUrl + "assets/img/connect-bg/connect_img.webp"} alt="ConnectImage" className='w-[95vw] h-[70] lg:h-[90vh] lg:w-[55vw] opacity-75 object-cover' loading="lazy" />
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center'>
                        <h2 className="text-4xl font-semibold text-white">Connect with StayEase</h2>
                        <p className='text-white mt-5'>Drop your concern, query or feedback</p>
                    </div>
                </div>

                <div className="relative md:w-[75vw] lg:w-[45vw] md:h-[85vh] lg:h-[90vh]">
                    <div className="absolute left-[5%] md:left-[16%] lg:left-[10%] lg:top-[13%] w-[90%] md:w-[100%] lg:w-[85%]">
                        <form onSubmit={handleSubmit} className='text-left mt-3'>
                            <div className="mb-3">
                                <label className="block text-sm font-medium mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="border rounded w-full py-2 px-3 text-[#000000]"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="border rounded w-full py-2 px-3 text-[#000000]"
                                />
                            </div>
                            <div className="mb-5">
                                <label className="block text-sm font-medium mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="border rounded w-full py-2 px-3 text-[#000000]"
                                />
                            </div>
                            <div className="mb-5">
                                <label className="block text-sm font-medium mb-2" htmlFor="email">
                                    Your Requirments
                                </label>
                                <textarea
                                    type="comments"
                                    id="comments"
                                    name="comments"
                                    rows="4" cols="50"
                                    value={formData.comments}
                                    onChange={handleChange}
                                    className="border rounded w-full p-2 text-[#000000]"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-amber-500 text-white mt-3 py-2 px-4 rounded hover:bg-amber-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default EnquirySection
