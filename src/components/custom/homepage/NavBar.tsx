import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { DropdownMenuRadioGroupDemo } from './Drowdown'

export default function NavBar() {

  return (
    <nav className='flex items-center gap-3'>
      <Link href='/accounts/work'>
        <h4 className='text-blue-600 font-semibold hover:bg-gray-100 w-24 py-3 flex justify-center rounded-md'>For work</h4>
      </Link>
     
      <Link href="/auth">
        <Button className='bg-white text-blue-600 border-1 hover:bg-gray-100 w-24'>
          Sign in
        </Button>
      </Link>

      <div className='flex'>
        <Button className='bg-blue-500 rounded-r-none border-r-2 border-black'>
          Create an account
        </Button>
        <span className='bg-blue-500 flex items-center text-white px-1 rounded-r-md'>
          <DropdownMenuRadioGroupDemo/>
        </span>
      </div>

    </nav>
  )
}