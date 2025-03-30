import React from 'react'
import { Button } from '../ui/button'
import { DropdownMenuRadioGroupDemo } from './homepage/Drowdown'

export default function CreateAccount() {
  return (
    <div className='flex'>
        <Button className='bg-blue-500 rounded-r-none border-r-1 border-black'>
            Create an account
        </Button>
        <span className='bg-blue-500 flex items-center text-white px-1 rounded-r-sm'>
            <DropdownMenuRadioGroupDemo/>
        </span>
  </div>
  )
}