import Footer from '@/components/layout/footer/pages'
import Navbar from '@/components/layout/navbar/page'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <>
    <Navbar />
    <div className='text-center mt-32 font-extrabold uppercase border border-black mx-56 py-28'>
      <h1>Login</h1>
      <p>Ini Adalah Page Login</p>  
      <button className='mt-10 bg-purple-400 h-10 w-24 rounded-xl'>
      <Link href={'/regis'}>Register</Link>
      </button>
    </div>
    <Footer />
    </>
  )
}

export default Login