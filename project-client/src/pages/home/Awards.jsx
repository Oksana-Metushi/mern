import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import img2 from '../../assets/images/vec.svg'
import award from '../../assets/images/award3.png'
import award1 from '../../assets/images/award1.png'
import award2 from '../../assets/images/award2.png'
import award4 from '../../assets/images/award4.png'

const Awards = () => {
    const [counter, setCounter] = useState(false)
    return (
        <div className='bg-secondary py-[10%]'>
            <div className='section-container'>
                <div className='relative pb-6'>
                    <img src={img2} alt="" className=' absolute -top-3 w-[70px] z-20' />
                    <p className='subtitle'>Favorites</p>
                    <h2 className='title'>Honors and Awards</h2>
                </div>
                <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)} />
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 text-center mt-[8%] gap-6 justify-items-center'>
                    <div className='relative'>
                        <img src={award1} alt="" className='w-auto' />
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h2 className='title mb-6'>
                                {counter && <CountUp
                                    start={0}
                                    end={95}
                                    duration={2.75} />}</h2>
                            <p className='subtitle'>National Wine Competition</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={award2} alt="" className='w-auto' />
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h2 className='title mb-6'>
                                {counter && <CountUp
                                    start={0}
                                    end={95}
                                    duration={2.75} />}</h2>
                            <p className='subtitle'>National Wine Competition</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={award4} alt="" className='w-auto' />
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h2 className='title mb-6'>
                                {counter && <CountUp
                                    start={0}
                                    end={95}
                                    duration={2.75} />}</h2>
                            <p className='subtitle'>National Wine Competition</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={award} alt="" className='w-auto' />
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h2 className='title mb-6'>
                                {counter && <CountUp
                                    start={0}
                                    end={95}
                                    duration={2.75} />}</h2>
                            <p className='subtitle'>National Wine Competition</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards