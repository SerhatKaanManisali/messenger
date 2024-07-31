import AuthCard from '@/components/AuthCard'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
    return (
        <section className='flex flex-col items-center gap-6 mx-4'>
            <AuthCard type='sign-in' title='Sign in' button='Sign in' href='/' />
            <div className='flex flex-col items-center gap-3'>
                <p>Don't have an account?</p>
                <Link href='/sign-up' className='btn btn-outline btn-accent btn-sm sm:btn sm:btn-outline'>
                    Create account
                </Link>
            </div>
        </section>
    )
}

export default SignIn