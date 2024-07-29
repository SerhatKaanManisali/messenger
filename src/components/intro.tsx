"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Intro = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 500);

        return () => clearTimeout(timer);
    }, []);


    return (
        <section className={`bg-intro w-full h-screen fixed  flex justify-center items-center transition-opacity duration-500 ${isVisible ? 'opacity-100 z-10' : 'opacity-0 -z-50'}`}>
            <div className='flex items-center gap-4'>
                <Image src='/icons/logo.svg' alt='Logo' width={70} height={70} />
                <h1 className='text-white font-semibold text-4xl'>DABubble</h1>
            </div>
        </section>
    )
}

export default Intro