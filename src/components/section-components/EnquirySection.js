import React, { useState, forwardRef } from 'react'

const EnquirySection = forwardRef((props, ref) => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            phone: '',
            email: '',
            comments: ''
        });
    };

    return (
        <section ref={ref} className='py-8 md:pt-[4.5rem] lg:px-24 mb-[35rem] md:mb-[2.5rem] lg:mb-[5rem]'>
            <div className='text-center hidden lg:block mb-[3rem]'>
                <span className='rounded-full px-4 py-1 bg-yellow-100 text-amber-500'>Let's Connect</span>
                <h2 className="text-3xl font-bold mt-5">Send Us Your Enquiry</h2>
            </div>

            <div className='flex flex-col lg:flex-row lg:space-x-20'>
                <div className='relative lg:h-[90vh] hidden lg:block'>
                    <img src={publicUrl + "assets/img/connect-bg/connect_img.jpg"} alt="AboutUsImage" className='w-[95vw] h-[70] lg:h-[90vh] lg:w-[55vw]' />
                    <div className='absolute top-[40%] left-[20%] text-center'>
                        <h2 className="text-4xl font-semibold text-white">Connect with StayEase</h2>
                        <p className='text-white mt-5'>Drop your concern, query or feedback</p>
                    </div>
                </div>

                <div className="relative md:w-[75vw] lg:w-[45vw] md:h-[85vh] lg:h-[90vh]">
                    <div className="absolute left-[5%] md:left-[16%] lg:left-[10%] lg:top-[13%] w-[90%] md:w-[100%] lg:w-[85%]">
                        <div className='text-center lg:hidden'>
                            <span className='rounded-full px-4 py-1 bg-yellow-100 text-amber-500'>Let's Connect</span>
                            <h2 className="text-3xl font-semibold mt-5 mb-10">Send Us Your Enquiry</h2>
                        </div>

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
                                    className="border rounded w-full py-2 px-3 bg-[#e8e8e8]"
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
                                    className="border rounded w-full py-2 px-3 bg-[#e8e8e8]"
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
                                    className="border rounded w-full py-2 px-3 bg-[#e8e8e8]"
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
                                    className="border rounded w-full bg-[#e8e8e8]"
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
