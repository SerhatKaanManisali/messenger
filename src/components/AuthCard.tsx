import Image from 'next/image'
import React from 'react'
import AuthForm from './AuthForm'
import Link from 'next/link'

const AuthCard = ({ type, title, button, href }: AuthCardProps) => {
    return (
        <section className='card card-compact sm:card-normal bg-white min-w-60 min-h-60 shadow-md'>
            <div className='card-body items-center'>

                {type !== 'sign-in' && (
                    <Link href='/sign-in' className='btn btn-circle bg-transparent hover:bg-base-100 absolute border-none shadow-none top-1 left-1'>
                        <Image src='/icons/arrow-back.svg' alt='Arrow back' width={15} height={15} className='cursor-pointer' />
                    </Link>
                )}

                <h2 className='card-title text-primary text-3xl text-center !mb-0 max-w-40'>
                    {title}
                </h2>

                <AuthForm type={type} />

                {type === 'sign-in' && (
                    <Link href='/reset-password' className='text-accent text-base mt-3 py-1 px-4 rounded-3xl transition-all hover:bg-base-100 hover:text-primary hover:font-medium'>
                        Forgot password?
                    </Link>
                )}

                <div className='card-actions mt-4'>
                    <Link href={href || '#'} className='btn btn-primary'>
                        {button}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AuthCard