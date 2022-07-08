import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext({ items: [], add: (item) => { }, remove: (item) => { }, removeAll: () => { }, clear: () => { } })

const CartProvider = ({ children }) => {
	// items is an array of objects with the following properties:
	// id: string
	// option: string
	// count: number
	// example: { id: '1234', count: 1 }
	const [items, _setItems] = useState([])

	// Load cart item from local storage
	useEffect(() => {
		_setItems(JSON.parse(localStorage.getItem('cart')) || [])
	}, [])

	// Save cart item to local storage
	const setItems = _items => {
		localStorage.setItem('cart', JSON.stringify(_items))
		_setItems(_items)
	}

	const add = (id, option) => {
		// find if item is already in cart
		const index = items.findIndex(i => i.id === id)
		if (index === -1) {
			// if not, add it
			setItems([...items, { id: id, count: 1, ...option }])
		} else {
			// if it is, increase count
			const newItems = [...items]
			newItems[index].count += 1
			setItems(newItems)
		}
	}

	const remove = (id) => {
		// find if item is already in cart
		const index = items.findIndex(i => i.id === id)
		if (index !== -1) {
			// if it is, decrease count
			let newItems = [...items]
			newItems[index].count -= 1
			if (newItems[index].count <= 0) newItems = newItems.filter(item => item.id !== id)
			setItems(newItems)
		}
	}

	const removeAll = (id) => {
		let newItems = items.filter(item => item.id !== id)
		setItems(newItems)
	}

	const clear = () => setItems([])

	return (
		<CartContext.Provider value={{ items, add, remove, removeAll, clear }}>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider