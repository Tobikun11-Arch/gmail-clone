import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className='flex gap-2 items-center'>
        <div className='w-8 h-6 relative'>
            <Image
                src='/assets/Gmail_Icon.webp'
                alt='Gmail icon'
                fill
                
            />
        </div>
        <h1 className='text-lg'>Gmail</h1>
    </div>
  )
}