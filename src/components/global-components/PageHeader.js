import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = (props) => {
    let headerTitle = props.headertitle
    let publicUrl = process.env.PUBLIC_URL + '/'
    let subheader = props.subheader ? props.subheader : headerTitle

    return (
        <section className='relative py-[1rem] md:py-20 lg:py-[8rem] mt-[4rem]'>
            <div className="w-full h-full overflow-hidden">
                <img
                    src={publicUrl + "assets/img/bg/pageHeader.webp"}
                    alt={`bg_image`}
                    className={`object-cover absolute inset-0 w-full h-full object-cover opacity-50`}
                    loading="eager"
                />
            </div>
            <div className="h-[18vh] md:h-[20vh]">
                <div className="absolute top-[28%] md:top-[40%] xl:top-[48%] left-[7%]">
                    <h1 className="text-2xl md:text-4xl font-semibold">{headerTitle}</h1>
                    <div className="pt-8">
                        <ul className='flex space-x-5 font-semibold'>
                            <li>
                                <Link to="/"><i className="fas fa-home" /><span> Home</span></Link>
                            </li>
                            <li>{`>`}</li>
                            <li className='text-[#eba312]'>{subheader}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeader
