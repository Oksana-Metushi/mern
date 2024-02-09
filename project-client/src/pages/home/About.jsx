import React from 'react'
import image from '../../assets/images/about.png'
import img2 from '../../assets/images/vec.svg'
import img3 from '../../assets/images/vec3.png'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='bg-secondary pt-[10%] relative'>
            <div className='section-container relative'>
                <img src={img2} alt="" className=' absolute -top-1 w-[70px] z-20' />
                <p className='subtitle'>About</p>
                <h2 className='title'>Praise for the balance in life</h2>
            </div>
            <div className='relative'>
                <div className='py-[10%] flex flex-col md:flex-row gap-12 items-center'>
                    <div className='md:w-1/2'>
                        <img src={image} alt="" className='w-full' />
                    </div>
                    <div className='md:w-[40%] px-16 space-y-6'>
                        <p className='text'> The first evidence of wine production at Vignamaggio was in 1404. On an original parchment, Amidio Gherardini, co-owner with his brother Accerito, writes about plans for the use of some empty barrels they have and agrees on an amount of wine to give to the thirsty recipient of the letter.</p>
                        <Link to='/aboutus' className='text-base-100 btn bg-gold px-8 py-3'>Read More</Link>
                    </div>
                </div>
                <img src={img3} alt="" className=' absolute top-2/3 right-0 xl:block hidden -translate-y-8' />
            </div>
        </div>
    )
}

export default About