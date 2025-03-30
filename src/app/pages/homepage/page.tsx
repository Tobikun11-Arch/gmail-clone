import React from 'react'
import Header from '@/components/custom/homepage/Header'

export default function Page() {
  return (
    <>
        <Header />
        <main className='min-h-screen flex justify-center items-center'>
          <section className='flex'>
            <div>
              <h1 className='font-semibold text-2xl'>Secure, smart, and <br /> easy to use email</h1>
            </div>
            <div>
              Email image
            </div>
          </section>
        </main>
    </>
  )
}