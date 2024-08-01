import AuthCard from '@/components/AuthCard'
import TransitionLink from '@/components/TransitionLink'
import React from 'react'

const SignIn = () => {
    return (
        <section className='flex flex-col items-center gap-6 mx-4'>
            <AuthCard type='sign-in' title='Sign in' button='Sign in' href='/' />
            <div className='flex flex-col items-center gap-3'>
                <p>Don't have an account?</p>
                <TransitionLink href='/sign-up' className='btn btn-outline btn-accent btn-sm sm:btn sm:btn-outline' direction='right'>
                    Create account
                </TransitionLink>
            </div>
        </section>
    )
}

export default SignIn