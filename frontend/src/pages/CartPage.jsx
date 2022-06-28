import React, { useContext, useEffect } from "react"
import CartItem from "../components/CartItem"
import { CartContext } from "../context/CartContext"

export default function CartPage() {
    const { items, add, remove } = useContext(CartContext)

    return (
        <div className="cart-page-container">
            {items.map((item) => (
                <CartItem key={item.id} id={item.id} />
            ))}
        </div>
    )
}
