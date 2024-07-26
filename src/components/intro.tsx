import Image from 'next/image'
import React from 'react'

const Intro = () => {
    return (
        <section className='bg-intro w-full h-screen fixed z-10 flex justify-center items-center'>
            <div className='flex items-center gap-4'>
                <div className='center-logo'><Image src='/icons/logo.svg' alt='Logo' width={70} height={70} /></div>
                {/* <h1 className='text-animation text-white font-semibold text-4xl'>DABubble</h1> */}
            </div>
        </section>
    )
}

export default Intro