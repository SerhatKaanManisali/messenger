import React from 'react'
import CustomInput from './CustomInput'

const AuthForm = ({ type }: { type: string }) => {
    return (
        <form className='flex flex-col gap-2'>
            {type === 'sign-up' && (
                <CustomInput label='Name' placeholder='Name' src='/icons/person-filled.svg' type='text' width={16} height={16} />
            )}
            <CustomInput label='Email' placeholder='your@email.com' src='/icons/mail.svg' type='email' width={20} height={16} />
            {(type === 'sign-up' || type === 'sign-in') && (
                <CustomInput label='Password' placeholder='Your password' src='/icons/lock.svg' type='password' width={16} height={21} />
            )}
        </form>
    )
}

export default AuthForm