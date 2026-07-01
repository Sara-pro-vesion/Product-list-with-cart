import React from 'react'
import AddCartBtn from './AddCartBtn';
import defaultImg from '../assets/defaultImg.jpeg'

export default function Card({ image, alt }: { image?: string ; alt?: string }) {
  return (

    <div className='border-none rounded-xl w-[300px] h-[200px] relative flex flex-col items-center'>
      <img src={image || defaultImg} alt={alt} className='object-cover border border-red-800 rounded-xl w-full h-full'/>
      <div className='absolute bottom-0 translate-y-1/2'>
      <AddCartBtn/>
      </div>
    </div>
  )
}
