import React from 'react'
import "../../src/App.css";
const Banner = ({ link, title, subtitle }) => {
    const info = {
        link: link,
        title: title,
        subtitle: subtitle
    }
    return (
        <div className='relative bgp'>
            <video src={link} loop autoPlay muted className='object-cover absolute h-screen w-screen -z-10 top-0 left-0'></video>

            <div className='section-container h-screen flex flex-col justify-center text-white space-y-5'>
                <span className='font-serif text-5xl text-secondary'>
                    {title}
                </span>
                <span className='text-neutral-200 md:w-1/2 font-mono'>
                    {subtitle}
                </span>
            </div>
        </div>
    )
}

export default Banner