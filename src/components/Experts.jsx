import React from 'react'
import laptop from '../assets/img/laptop.webp'

const Experts = () => {
    return (
        <div className='max-w-[1240px] mx-auto my-10 md:grid grid-cols-3'>
            <div className='col-span-1 md:w-[80%] text-center'>
                <img src={laptop} alt='' className='inline'/>
            </div>
            <div className='col-span-2 flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold my-2'>Work From Experts</h1>
                <p className='my-2 text-justify'>
                    Mission Statement: "Empowering Innovation through Technology"
                    Overview:
                    TechSavvy Solutions is a leading provider of comprehensive IT services, specializing in software development, IT consulting, and digital transformation solutions. Established in 2008 by a group of passionate technologists, the company has since grown into a trusted partner for businesses seeking to leverage technology to drive growth and efficiency.
                    Services:
                    Software Development: TechSavvy Solutions offers custom software development services tailored to meet the unique needs of each client. From web and mobile applications to enterprise software solutions, their team of experienced developers utilizes cutting-edge technologies to deliver scalable, reliable, and secure software products.
                    IT Consulting: With deep expertise across a wide range of industries, TechSavvy Solutions provides strategic IT consulting services to help businesses align their technology initiatives with their overall business objectives. Whether it's optimizing IT infrastructure, implementing cloud solutions, or enhancing cybersecurity measures, their consultants offer actionable insights and recommendations to drive digital transformation.
                    Digital Transformation: In today's rapidly evolving digital landscape, businesses must adapt to stay competitive. TechSavvy Solutions partners with organizations to navigate digital transformation initiatives, leveraging emerging technologies such as artificial intelligence, machine learning, Internet of Things (IoT), and blockchain to innovate processes, improve customer experiences, and unlock new revenue streams.
                </p>
                <button className='bg-black w-[30%] text-white p-3 rounded mt-2'>Get Started</button>
            </div>
        </div>
    )
}

export default Experts
