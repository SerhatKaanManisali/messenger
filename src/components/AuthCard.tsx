import Image from 'next/image'
import React from 'react'
import AuthForm from './AuthForm'

const AuthCard = ({ type, title }: AuthCardProps) => {
    return (
        <section className='card bg-white min-w-60 min-h-60'>
            <div className='card-body items-center text-4xl'>
                {type ? "!sign-in" && (
                    <Image src="/icons/arrow-back.svg" alt='Arrow back' width={15} height={15} className='absolute top-4 left-4' />
                ) : ""}
                <h2 className='card-title text-primary text-3xl'>
                    {title}
                </h2>
                <AuthForm />
            </div>
        </section>
    )
}

export default AuthCard