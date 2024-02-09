import React from 'react'
import img from '../assets/images/footerimg.jpg'
import img2 from '../assets/images/vec.svg'
import img3 from '../assets/images/footer-shape.svg'
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-secondary'>
            <div className='section-container'>
                <h1 className='title text-center pt-[5%]'>Get in touch</h1>
                <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center text-center py-16 subtitle'>
                    <div>
                        <h2>Our Adress</h2>
                        <p>Via Gaetano Donizetti 122 </p>
                    </div>
                    <div>
                        <h2>Book a Tour</h2>
                        <p>Monday to Saturday</p>
                    </div>
                    <div>
                        <h2>Distribution</h2>
                        <p>For any inquiries write us at</p>
                    </div>
                </div>
                <img src={img2} alt="" width={55} className='mx-auto relative z-30' />
            </div>
            <div className='relative'>
                <img src={img} alt="" className=' object-contain' />
                <div className='absolute -top-1 left-1/2 -translate-x-1/2 w-screen'>
                    <img src={img3} alt="" className=' ' />
                </div>
                <div className='flex justify-center gap-12 text-secondary xl:text-7xl text-2xl absolute top-1/2 text-center left-1/2 -translate-x-1/2'>
                    <a href="#"><RiInstagramLine /></a>
                    <FaFacebook />
                    <FaSquareTwitter />
                    <FaTripadvisor />
                </div>
            </div>

        </div>
    )
}

export default Footer