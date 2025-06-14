import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState([])
	const [orders, setOrders] = useState([])

	const placeOrder = () => {
		if (items.length === 0) return

		const orderTotal = items.reduce((sum, p) => sum + p.price, 0)
		setOrders(prev => [
			...prev,
			{
				id: Date.now(),
				items,
				total: orderTotal,
			},
		])
		clearCart()
	}

	const addToCart = product => {
		if (!items.find(item => item.id === product.id)) {
			setItems(prev => [...prev, product])
		}
	}

	const removeFromCart = id => {
		setItems(prev => prev.filter(item => item.id !== id))
	}

	const clearCart = () => setItems([])

	const total = items.reduce((sum, p) => sum + p.price, 0)

	return (
		<CartContext.Provider
			value={{
				items,
				addToCart,
				removeFromCart,
				clearCart,
				total,
				orders,
				placeOrder,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
