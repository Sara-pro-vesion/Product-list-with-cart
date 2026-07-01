import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { CounterAtom, SwitchBtnAtom } from '../Atoms/atoms'

export default function AddCartBtn() {
    const [switched, setSwitched] = useAtom(SwitchBtnAtom)
    const [count, setCount] = useAtom(CounterAtom)


    useEffect(() => {
        if(count === 0){
            setSwitched(false)
        }
    },[count ,setSwitched])

    const handleClick = () => {
        setCount(1)
        setSwitched(true) 
    }

    const handleIncrement = () => {

    }
    if (switched) {
        return(
            <div className='bg-[#ff7045] text-white p-2 border border-white rounded-2xl flex flex-row gap-2 items-center justify-between cursor-pointer w-[140px]'>
                <button onClick={(e) => {setCount((prev) => prev + 1);e.stopPropagation()}} >
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                </button>
                <p>{count}</p>
                <button onClick={(e) => {setCount((prev) => prev - 1);e.stopPropagation()}}>
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-Linecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>

                </button>
            </div>
        )


    }
    return (
        <button 
            onClick={handleClick}
            className='p-2 border border-[#8b6c5c] rounded-2xl flex flex-row gap-2 items-center cursor-pointer w-[140px]'
        >
            <svg 
                className="w-6 h-6 text-[#ff7045] dark:text-white" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                fill="none" 
                viewBox="0 0 24 24"
            >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
            </svg>
            <p className='text-[#523C00] text-md font-medium'>Add to Cart</p>
        </button>
    )
}
