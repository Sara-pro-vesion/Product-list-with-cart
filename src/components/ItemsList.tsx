import React, { useEffect } from 'react'
import ListItem from './ListItem'
import { useAtom } from 'jotai'
import { CartItemsAtom } from '../Atoms/atoms'


export default function ItemsList() {

    const filteredItems = [
        {id:1,
        name : "chocolate cream",
        UnitPrice : 2.99,
        units : 2,
        totalUnitsPrice : 6
        },
        {id:2,
        name : "chocolate ",
        UnitPrice : 2,
        units : 2,
        totalUnitsPrice : 4
        }
    ]

    const [cartItems, setCartItems] = useAtom(CartItemsAtom)

    useEffect(() => {
      if (cartItems.length === 0) setCartItems(filteredItems)
    }, [])

  return (
    <div>
      {cartItems.map(item => (
        <ListItem
          key={item.id}
          id={item.id}
          name={item.name}
          units={item.units}
          UnitPrice={item.UnitPrice}
          totalUnitsPrice={item.totalUnitsPrice}
        />
      ))}
    </div>
  )
}