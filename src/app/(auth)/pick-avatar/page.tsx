'use client'

import TransitionLink from '@/components/TransitionLink'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const PickAvatar = () => {
    const userName = 'Frederick Beck';
    const avatars = ['/avatars/avatar-elise.svg', 'avatars/avatar-elias.svg', 'avatars/avatar-frederick.svg', 'avatars/avatar-steffen.svg', 'avatars/avatar-sofia.svg', 'avatars/avatar-noah.svg']

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

    const handleClick = () => fileInputRef?.current?.click();
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setSelectedFile(fileUrl);
            setSelectedAvatar(null);
        } else {
            setSelectedFile(null);
        }
    };
    const pickAvatar = (avatar: string) => {
        setSelectedFile(avatar);
        setSelectedAvatar(avatar);
    }

    return (
        <section className='card card-compact sm:card-normal bg-white shadow-md mx-4 mb-4'>
            <div className='card-body items-center gap-6'>

                <TransitionLink href='/sign-up' className='btn btn-circle bg-transparent hover:bg-base-100 absolute border-none shadow-none top-1 left-1' direction='left'>
                    <Image src='/icons/arrow-back.svg' alt='Arrow back' width={15} height={15} className='cursor-pointer' />
                </TransitionLink>

                <h2 className='card-title text-primary text-3xl text-center !mb-0 max-w-40'>
                    Pick your avatar
                </h2>

                <div className='avatar'>
                    <div className='w-24 rounded-full'>
                        <Image src={selectedFile || '/icons/avatar-placeholder.svg'} alt='avatar' width={120} height={120} />
                    </div>
                </div>

                <h2 className='font-bold text-3xl'>
                    {userName}
                </h2>

                <div className='flex flex-wrap justify-evenly gap-4 max-w-64 sm:max-w-fit sm:flex-nowrap'>
                    {avatars.map(avatar => (
                        <div className={`avatar basis-1/4 flex justify-center items-center cursor-pointer`} key={avatar} onClick={() => pickAvatar(avatar)}>
                            <div className={`w-12 rounded-full hover:ring-4 ring-slate-300 transition-all ${selectedAvatar === avatar ? 'ring-4' : ''}`}>
                                <img src={avatar} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="divider my-1">OR</div>
                <div className='flex gap-4'>

                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className='hidden' />

                    <button className='btn btn-secondary btn-outline' onClick={handleClick}>Upload foto</button>

                    <TransitionLink href='/' className='btn btn-primary' direction='right'>
                        Continue
                    </TransitionLink>

                </div>
            </div>

        </section>
    )
}

export default PickAvatar