import { useState } from 'react'
import AddCartBtn from './components/AddCartBtn'
import Card from './components/Card'
import CheckoutCart from './components/CheckoutCart'
import ListItem from './components/ListItem'
import ItemsList from './components/ItemsList'

function App() {
  return (
    <div className='flex flex-col items-center justify-center p-5'>
      <ItemsList/>
    </div>
  )
}

export default App
