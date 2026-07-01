import { atom } from "jotai"

export interface CartItem {
  id: number
  name: string
  units: number
  UnitPrice: number
  totalUnitsPrice: number
}

export const SwitchBtnAtom = atom<boolean>(false)
export const CounterAtom = atom(0)
export const CartItemsAtom = atom<CartItem[]>([])