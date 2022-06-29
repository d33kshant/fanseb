import React, { useContext, useEffect } from "react"
import { useState } from "react"
import CartItem from "../components/CartItem"
import { CartContext } from "../context/CartContext"
import "../styles/CartPage.css"

export default function CartPage() {
    const { items, add, remove, clear } = useContext(CartContext)
    const [formState, setFormState] = useState({})

    const formSubmit = async (event) => {
        event.preventDefault()
        const order = items
        const response = await fetch("/api/order", {
            method: "post",
            headers: {
                "Content-type": "application/json",
                accepet: "application/json",
            },
            body: JSON.stringify({ order_details: formState, order_items: items }),
        })
        const data = await response.json()
        if (data.error) return alert(data.error)
        alert("Order has been taken.")
        clear()
    }

    const onInputChange = (key, value) => {
        const _formState = { ...formState }
        _formState[key] = value
        setFormState(_formState)
    }

    const totalPrice = items.map((item) => item.selling_price).reduce((p, c) => p + c)

    return (
        <div className="cart-page-container">
            <div className="cart-page-items">
                <h3 className="cart-item-title">Your Cart ({items.length})</h3>
                {items.map((item) => (
                    <CartItem key={item.id} id={item.id} count={item.quantity} onAddClick={() => add(item.id)} onRemoveClick={() => remove(item.id)} />
                ))}
            </div>
            <div className="cart-order-container">
                <h3 className="cart-item-title">Order Form</h3>
                <form className="cart-order-form" onSubmit={formSubmit}>
                    <div className="cart-info-container">
                        <span>Total Items: {items.reduce((p, c) => p.quantity + c.quantity)}</span>
                        <span>Total Price: {totalPrice}</span>
                    </div>
                </form>
            </div>
        </div>
    )
}
