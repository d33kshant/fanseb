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

    return (
        <div className="cart-page-container">
            <div className="cart-page-items">
                <h3 className="cart-item-title">Your Cart ({items.reduce((p, c) => p + c.quantity, 0)})</h3>
                {items.length > 0 ? items.map((item) => <CartItem key={item.id} item={item.id} count={item.quantity} onAddClick={() => add(item.id)} onRemoveClick={() => remove(item.id)} />) : <p>You cart is empty, Try adding some product.</p>}
            </div>
            <div className="cart-order-container">
                <h3 className="cart-item-title">Order Form</h3>
                <form className="cart-order-form" onSubmit={formSubmit}>
                    <div className="cart-info-container">{/* <span>Total Items: {items.reduce((p, c) => p + c.quantity, 0)}</span> */}</div>
                </form>
            </div>
        </div>
    )
}
