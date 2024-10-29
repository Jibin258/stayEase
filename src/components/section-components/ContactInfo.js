import React from 'react'

const ContactInfo = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    return (
        <section className="p-10 md:p-24 my-24">
            <div className="flex flex-col md:flex-row">
                <div className="relative py-10 md:w-[35vw] text-center mb-32 md:mb-10">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-max">
                        <div className="mb-[35px]">
                            <img src={publicUrl + "assets/img/icons/mail.png"} alt="MailIcon" className="max-w-[80px]" />
                        </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 text-gray-500">
                        <h3>Email Address</h3>
                        <p>info@webmail.com</p>
                    </div>
                </div>

                <div className="relative py-10 md:w-[35vw] text-center mb-32 md:mb-10">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-max">
                        <div className="mb-[35px]">
                            <img src={publicUrl + "assets/img/icons/phone.png"} alt="PhoneIcon" className="max-w-[80px]" />
                        </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 text-gray-500">
                        <h3>Phone Number</h3>
                        <p>+91 91 6464 8787</p>
                    </div>
                </div>

                <div className="relative py-10 md:w-[35vw] text-center mb-10">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-max">
                        <div className="mb-[35px]">
                            <img src={publicUrl + "assets/img/icons/location.png"} alt="LocationIcon" className="max-w-[80px]" />
                        </div>
                    </div>
                    <div className="absolute top-full text-gray-500">
                        <h3>Office Address</h3>
                        <p>Estanzia Ease Private Limited <br />No. 216,215, 3rd Cross, Off Neeladri Road, Electronic City Phase 1, Bengaluru 560100</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
