import React from 'react'
import img2 from '../../assets/images/vec.svg'

const Details = () => {
    return (
        <div className='bg-secondary pt-[10%] bg-con'>
            <div className='section-container relative'>
                <img src={img2} alt="" className=' absolute -top-1 w-[70px] z-20' />
                <p className='subtitle'>Favorites</p>
                <h2 className='title'>Contact us</h2>
                <div className='flex flex-col md:flex-row md:gap-16 py-[10%] items-center'>
                    <div className='md:w-1/2 md:order-1 order-2'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="space-y-8 md:w-1/2 mx-auto w-full md:order-2 order-1 subtitle">
                        <div>
                            <h2>Our Adress</h2>
                            <p>Via Gaetano Donizetti 122 </p>
                        </div>
                        <div>
                            <h2>Call Us</h2>
                            <p><a href="0685471233">0685471233</a> </p>
                        </div>
                        <div>
                            <h2>Book a Tour</h2>
                            <p>Monday to Saturday</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details