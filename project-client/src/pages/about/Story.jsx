import React from 'react'
import img from '../../assets/images/timeline.png'
import img1 from '../../assets/images/timeline3.png'
import img2 from '../../assets/images/timeline2.png'
import img3 from '../../assets/images/timeline1.png'
import img4 from '../../assets/images/timeline5.png'

const serviceLists = [
    { id: 1, title: "Catering", des: "Delight your guests with our flavors and  presentation", img: img },
    { id: 2, title: "Fast delivery", des: "We deliver your order promptly to your door", img: img1 },
    { id: 3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering n", img: img2 },
    { id: 4, title: "Gift Cards", des: "Give the gift of exceptional dining with project Gift Cards", img: img3},
    { id: 5, title: "Gift Cards", des: "Give the gift of exceptional dining with project Gift Cards", img: img4},
]

const Story = () => {
    return (
        <div className=' bg-secondary pb-[8%]'>
            <h1 className='about text-center py-[6%] section-container'>Learn more about us!</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical section-container">
                {
                    serviceLists.map((service) => (
                        <li key={service.id}>
                            <div className="timeline-middle">
                                <img src={service.img} alt="" className='md:ml-2 ml-3 -mb-1 md:w-full w-[46px]' />
                            </div>
                            <div className={`md:mt-20 mr-6 ${service.id % 2 == 0 ? "timeline-end md:ml-6" : "timeline-start md:text-end" }`}>
                                <time className="font-mono italic"> {service.title}</time>
                                <div className="text-lg font-black">{service.des}</div>
                                The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
                            </div>
                            <hr />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Story