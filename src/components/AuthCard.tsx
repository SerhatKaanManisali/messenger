import Image from 'next/image'
import React from 'react'
import AuthForm from './AuthForm'
import TransitionLink from './TransitionLink'

const AuthCard = ({ type, title, button, href }: AuthCardProps) => {
    return (
        <section className='card card-compact sm:card-normal bg-white shadow-md mx-4 mb-4'>
            <div className='card-body items-center'>

                {type !== 'sign-in' && (
                    <TransitionLink href='/sign-in' className='btn btn-circle bg-transparent hover:bg-base-100 absolute border-none shadow-none top-1 left-1' direction='left'>
                        <Image src='/icons/arrow-back.svg' alt='Arrow back' width={15} height={15} className='cursor-pointer' />
                    </TransitionLink>
                )}

                <h2 className='card-title text-primary text-3xl text-center !mb-0 max-w-40 overflow-visible'>
                    {title}
                </h2>

                <AuthForm type={type} />

                {type === 'sign-in' && (
                    <TransitionLink href='/reset-password' className='text-accent text-base mt-3 py-1 px-4 rounded-3xl transition-all hover:bg-base-100 hover:text-primary hover:font-medium' direction='right'>
                        Forgot password?
                    </TransitionLink>
                )}

                <div className='card-actions mt-4'>
                    <TransitionLink href={href || '#'} className='btn btn-primary' direction='right'>
                        {button}
                    </TransitionLink>
                </div>
            </div>
        </section>
    )
}

export default AuthCard