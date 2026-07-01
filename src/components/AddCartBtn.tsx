import { useAtom } from 'jotai'
import React from 'react'
import { CounterAtom } from '../Atoms/atoms'

export default function AddCartBtn() {
    const [count, setCount] = useAtom(CounterAtom)
    const isSwitched = count > 0

    return (
        <div 
            className={`
                p-2 rounded-2xl flex flex-row items-center justify-between w-[140px] h-[42px] border transition-all duration-300 ease-in-out
                ${isSwitched 
                    ? 'bg-[#ff7045] border-white text-white' 
                    : 'bg-white border-[#8b6c5c] cursor-pointer'
                }
            `}
            onClick={() => !isSwitched && setCount(1)}
        >
            {isSwitched ? (
                <>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation()
                            setCount((prev) => Math.max(0, prev - 1))
                        }} 
                        className="cursor-pointer"
                    >
                        <svg className="w-6 h-6 text-white pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </button>
                    <p className="font-medium">{count}</p>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation()
                            setCount((prev) => prev + 1)
                        }} 
                        className="cursor-pointer"
                    >
                        <svg className="w-6 h-6 text-white pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </button>
                </>
            ) : (
                <div className="flex flex-row gap-2 items-center justify-center w-full pointer-events-none">
                    <svg className="w-6 h-6 text-[#ff7045]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
                    </svg>
                    <p className='text-[#523C00] text-md font-medium'>Add to Cart</p>
                </div>
            )}
        </div>
    )
}
