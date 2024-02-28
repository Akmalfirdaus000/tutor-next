import Footer from '@/components/layout/footer/pages'
import Navbar from '@/components/layout/navbar/page'
import React from 'react'
type DetailProdukProps = {params:{slug: string}}
const DetailProduk = ( props: DetailProdukProps ) => {
    const {params} = props
    
  return (
    <>
    <Navbar />
    <div className=' text-center mt-32 font-extrabold uppercase border border-black mx-56 py-28'>
        <h1>Detail Produk</h1>
        <h2> {params.slug} </h2>
       
    </div>
    <Footer />
    </>
  )
}

export default DetailProduk