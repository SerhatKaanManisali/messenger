'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

const PickAvatar = () => {
    const userName = 'Frederick Beck';
    const avatars = ['/avatars/avatar-elise.svg', 'avatars/avatar-elias.svg', 'avatars/avatar-frederick.svg', 'avatars/avatar-steffen.svg', 'avatars/avatar-sofia.svg', 'avatars/avatar-noah.svg']
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const handleClick = () => { fileInputRef?.current?.click(); };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setSelectedFile(fileUrl);
        } else {
            setSelectedFile(null)
        }
    };

    return (
        <section className='card card-compact sm:card-normal bg-white shadow-md mx-4 mb-4'>
            <div className='card-body items-center gap-6'>

                <Link href='/sign-up' className='btn btn-circle bg-transparent hover:bg-base-100 absolute border-none shadow-none top-1 left-1'>
                    <Image src='/icons/arrow-back.svg' alt='Arrow back' width={15} height={15} className='cursor-pointer' />
                </Link>

                <h2 className='card-title text-primary text-3xl text-center !mb-0 max-w-40'>
                    Pick your avatar
                </h2>

                <div className='avatar'>
                    <Image src={selectedFile || '/icons/avatar-placeholder.svg'} alt='avatar' width={120} height={120} className='' />
                </div>

                <h2 className='font-bold text-3xl'>
                    {userName}
                </h2>

                <div className='flex flex-wrap justify-evenly gap-4 max-w-64 sm:max-w-fit sm:flex-nowrap'>
                    {avatars.map(avatar => (
                        <div className='avatar basis-1/4 flex justify-center items-center' key={avatar}>
                            <div className='w-12 rounded-full'>
                                <img src={avatar} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="divider my-1">OR</div>
                <div className='flex gap-4'>

                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className='hidden' />

                    <button className='btn btn-secondary btn-outline' onClick={handleClick}>Upload foto</button>

                    <Link href='/' className='btn btn-primary'>
                        Continue
                    </Link>

                </div>
            </div>

        </section>
    )
}

export default PickAvatar