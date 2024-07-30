import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PickAvatar = () => {
    return (
        <section className='card card-compact sm:card-normal bg-white min-w-60 min-h-60 shadow-md'>
            <div className='card-body items-center'>

                <Link href='/sign-up' className='btn btn-circle bg-transparent hover:bg-base-100 absolute border-none shadow-none top-1 left-1'>
                    <Image src='/icons/arrow-back.svg' alt='Arrow back' width={15} height={15} className='cursor-pointer' />
                </Link>

                <h2 className='card-title text-primary text-3xl text-center !mb-0 max-w-40'>
                    Pick your avatar
                </h2>

                <div className='avatar'>
                    <Image src='/icons/avatar-placeholder.svg' alt='avatar' width={120} height={120} className='' />
                </div>
            </div>

        </section>
    )
}

export default PickAvatar