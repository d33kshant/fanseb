import React, { createContext, useState } from 'react'

export const CartContext = createContext({ items: [], add: (item) => { }, remove: (item) => { } })

const CartProvider = ({ children }) => {
	// items is an array of objects with the following properties:
	// id: string
	// option: string
	// quantity: number
	// example: { id: '1234', quantity: 1 }
	const [items, setItems] = useState([
		{
			id: 'abcd',
			quantity: 3,
		},
		{
			id: 'efgh',
			quantity: 2
		}
	])

	// Load cart item from user account
	// useEffect(() => {
	// TODO: fetch data from backend
	// }, [])

	const add = (item) => {
		// find if item is already in cart
		const index = items.findIndex(i => i.id === item.id)
		if (index === -1) {
			// if not, add it
			setItems([...items, item])
		} else {
			// if it is, increase quantity
			const newItems = [...items]
			newItems[index].quantity += 1
			setItems(newItems)
		}
	}

	const remove = (item) => {
		// find if item is already in cart
		const index = items.findIndex(i => i.id === item.id)
		if (index === -1) {
			// if not, do nothing
		} else {
			// if it is, decrease quantity
			const newItems = [...items]
			newItems[index].quantity -= 1
			if (newItems[index].quantity === 0) newItems.splice(index, 1)
			setItems(newItems)
		}
	}

	return (
		<CartContext.Provider value={{ items, add, remove }}>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider