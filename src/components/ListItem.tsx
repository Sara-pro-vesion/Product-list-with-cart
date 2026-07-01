import React from 'react'
import { CartItemsAtom } from '../Atoms/atoms'
import { useAtom } from 'jotai'


export default function ListItem({name ,units ,UnitPrice ,totalUnitsPrice, id} : {name: string ,units : number ,UnitPrice: number ,totalUnitsPrice : number, id: number}) {
    
    const [cartItems, setCartItems] = useAtom(CartItemsAtom)

    const handleDelete = () => {
      setCartItems((prevItems) => prevItems.filter(item => item.id !== id))
    }
 
    return (
    <div className='flex flex-row items-center justify-between p-3 w-[300px] h-fit'>
      <div className='flex flex-col items-start justify-between'>
        <h1>{name}</h1>
        <div className='flex flex-row items-center gap-2'>
            <p className='mr-2'>{units}x</p>
            <p>@${UnitPrice}</p>
            <p>${totalUnitsPrice}</p>
        </div>
      </div>
      <button onClick={handleDelete}>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
      </button>
    </div>
  )
}
