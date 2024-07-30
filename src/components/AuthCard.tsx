import Image from 'next/image'
import React from 'react'
import AuthForm from './AuthForm'
import Link from 'next/link'

const AuthCard = ({ type, title, button }: AuthCardProps) => {
    return (
        <section className='card bg-white min-w-60 min-h-60'>
            <div className='card-body items-center text-4xl'>
                {type ? '!sign-in' && (
                    <Link href='/sign-in' className='btn btn-circle bg-transparent hover:bg-base-100 absolute border-none shadow-none top-4 left-4'>
                        <Image src='/icons/arrow-back.svg' alt='Arrow back' width={15} height={15} className='cursor-pointer' />
                    </Link>
                ) : ''}
                <h2 className='card-title text-primary text-3xl'>
                    {title}
                </h2>
                <AuthForm type='sign-up' />
                <div className='card-actions mt-4'>
                    <button className='btn btn-primary'>{button}</button>
                </div>
            </div>
        </section>
    )
}

export default AuthCard