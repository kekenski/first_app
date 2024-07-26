import React from 'react'
import Image from "next/image";

const Text = () => {
    return (
        <>
        <div className='rounded-lg p-2 bg-yellow-500 w-16'>
          <h6 className='text-black text-left font-bold text-xs'>
            Learning 
          </h6>
          </div>
          <p className='text-left font-bold text-xs pt-4'>
            Published 7/23/2024
          </p>
          <h1 className='text-left font-bold text-3xl hover:text-yellow-700 pt-4'>
            Next.jsx foundations
          </h1>
          <p className='text-left text-xs pt-4 w-8/10'>
            These languages are the backbone of every website, defining structure, content, and presentation
          </p>
          <div className='flex gap-2'>
            <Image src={"/image-avatar.webp"} width={30} height={100} alt='tuipi' className='pt-3.5'  />
            <p className='font-bold text-center pt-4'>Andria Kekenadze</p>
          </div>
        </>
    )
}

export default Text