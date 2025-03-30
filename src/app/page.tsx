'use client'
import React, { useState } from 'react'
import Header from '@/components/custom/homepage/Header'
import Image from 'next/image'
import CreateAccount from '@/components/custom/CreateAccount'
import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton'

export default function Page() {
  const [ isLoading, setLoading ] = useState<boolean>(false)

  return (
    <>
      <Header />
      <main className='min-h-screen flex justify-center items-center'>
        <section className='flex gap-10'>
          <div>
            <h1 className='font-bold text-[4.375rem] leading-[3.75rem]'>Secure, smart, and <br /> easy to use email</h1>
            <h6 className='mt-8 text-gray-400 font-medium text-xl'>Get more done with Gmail, Now integrated with Google Chat, <br /> Google meet, and more, all in one place.</h6>
            <div className='flex gap-2 mt-5'>
              <CreateAccount/>
              <Link href='/accounts/work'>
                <h4 className='text-blue-600 font-semibold hover:bg-gray-100 w-28 py-3 flex justify-center rounded-md'>For work</h4>
              </Link>
            </div>
          </div>
          <div className='relative w-[600px] h-[450px]'>
            {isLoading && (
              <div className="absolute inset-0 flex justify-center items-center bg-gray-200">
                <Skeleton />
              </div>
            )}
            <Image
              src="https://lh3.googleusercontent.com/dzHrYeZICfncgMRajd9e6fS0t_9dkc80qzJ2F6Wr1XAQAzJgG-jvK1vhOvHNNIBkyPEdGQmb2Fel9jyUariZKN6ENDkxKvg3lKWZAg=e365-pa-nu-rw-w720"
              alt="Gmail banner"
              fill
              className={`rounded-xl transition-opacity duration-500 ${ isLoading ? "opacity-0" : "opacity-100"}`}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        </section>
      </main>
    </>
  )
}