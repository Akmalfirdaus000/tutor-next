import Footer from '@/components/layout/footer/pages'
import Navbar from '@/components/layout/navbar/page'
import React from 'react'

const Produk = () => {
  return (
    <>
    <Navbar />
    <div className='text-center mt-32 font-extrabold uppercase border border-black mx-56 py-28'>
      <h1>Produk</h1>
      <p>Ini Adalah Page Produk</p>  
    </div>
    <Footer />
    </>
  )
}

export default Produk