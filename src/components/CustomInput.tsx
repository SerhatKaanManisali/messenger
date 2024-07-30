import Image from 'next/image'
import React from 'react'

const CustomInput = ({ label, placeholder, src, type, width, height }: CustomInputProps) => {
    return (
        <div>
            <p className='label text-base'>{label}</p>
            <label className='input flex items-center gap-4 focus-within:outline-secondary hover:border-secondary transition-colors'>
                <Image src={src} alt={type} width={width} height={height} />
                <input type={type} placeholder={placeholder} />
            </label>
        </div>
    )
}

export default CustomInput