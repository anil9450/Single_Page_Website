import React from 'react'

const NewsLetter = () => {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] mx-auto flex justify-between py-[50px]'>
                <div className='m-2'>
                    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to Latest Call Us</h1>
                    <p className='text-white'>Sign to our news leters & up tp date</p>
                </div>
                <div className=''>
                    <input type='text' className='sm:w-full rounded mb-2 p-3 mr-2 text-slate-600' placeholder='Email' />
                    <button className='bg-black text-white p-3 rounded'>Get Started</button>
                    <br />
                    <p className='text-white'>
                        we care you the most according to your need
                        <br />
                        <a href='' className='text-black'>Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
