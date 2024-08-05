import { CustomInputProps } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

const CustomInput = ({ label, name, placeholder, src, type, width, height, value, onChange, onBlur, error }: CustomInputProps) => {
    return (
        <div className='w-full'>
            <p className='label text-base'>{label}</p>
            <label className='input flex items-center gap-4 focus-within:outline-none focus-within:border-secondary hover:border-secondary border-2 transition-colors'>
                <Image src={src} alt={type} width={width} height={height} />
                <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
            </label>
            {error && (<p className="text-error text-sm mt-1">{error}</p>)}
        </div>
    )
}

export default CustomInput