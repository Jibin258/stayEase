import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = (props) => {
    let headerTitle = props.headertitle
    let publicUrl = process.env.PUBLIC_URL + '/'
    let subheader = props.subheader ? props.subheader : headerTitle

    return (
        <section style={{ backgroundImage: `url(${publicUrl}assets/img/bg/pageHeader.jpg)` }} className='py-[5rem] md:py-20 lg:py-[8rem]'>
            <div className="relative bg-cover bg-center h-[18vh] md:h-[20vh]">
                <div className="absolute top-[40%] left-[7%]">
                    <h1 className="text-2xl md:text-4xl font-bold">{headerTitle}</h1>
                    <div className="pt-8">
                        <ul className='flex space-x-5 font-semibold'>
                            <li><Link to="/"><i className="fas fa-home text-amber-400" /><span className='text-[#60727d]'>  Home</span></Link></li>
                            <li className='text-[#60727d]'>{`>`}</li>
                            <li>{subheader}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeader
