'use client'

import React, { useRef, useState, useEffect } from 'react'
import CustomInput from './CustomInput'
import { useFormik } from 'formik'
import TransitionLink from './TransitionLink'
import { authFormSchema, usePrefetchLinks } from '@/lib/utils'
import { signIn, signUp } from '@/lib/actions/user.actions'

const AuthForm = ({ type, href, button }: { type: string, href: string, button: string }) => {
    const [isLoading, setIsLoading] = useState(false);
    const transitionLinkRef = useRef<HTMLAnchorElement | null>(null);
    const validationSchema = authFormSchema(type);
    usePrefetchLinks();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (userData) => {
            try {
                setIsLoading(true);
                if (type === 'sign-up') {
                    await signUp(userData);
                } else if (type === 'sign-in') {
                    await signIn(userData);
                }
                if (transitionLinkRef.current) transitionLinkRef.current.click();
            } catch (error) {
                console.error(error);
            }
        }
    });

    return (
        <form className='flex flex-col gap-2 items-center' onSubmit={formik.handleSubmit}>
            {type === 'sign-up' && (
                <CustomInput label='Name' name='name' placeholder='Name' src='/icons/person-filled.svg' type='text' width={16} height={16} value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.name && formik.errors.name} />
            )}

            <CustomInput label='Email' name='email' placeholder='your@email.com' src='/icons/mail.svg' type='email' width={20} height={16} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email} />

            {(type === 'sign-up' || type === 'sign-in') && (
                <CustomInput label='Password' name='password' placeholder='Your password' src='/icons/lock.svg' type='password' width={16} height={21} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.password && formik.errors.password} />
            )}

            {type === 'sign-in' && (
                <TransitionLink href='/reset-password' className='text-accent text-base mt-3 py-1 px-4 rounded-3xl transition-all hover:bg-base-100 hover:text-primary hover:font-medium' direction='right' data-prefetch>
                    Forgot password?
                </TransitionLink>
            )}

            <button type="submit" className={`mt-4 btn btn-primary ${isLoading ? 'btn-disabled btn-outline' : ''}`} disabled={isLoading}>
                {isLoading && (<span className="loading loading-spinner loading-md"></span>)}
                {isLoading ? 'Loading...' : button}
            </button>

            <TransitionLink href={href || '#'} className='hidden' direction='right' ref={transitionLinkRef} data-prefetch />
        </form>
    )
}
export default AuthForm
