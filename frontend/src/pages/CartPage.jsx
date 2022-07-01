import React, { useContext, useEffect } from "react"
import { useState } from "react"
import CartItem from "../components/CartItem"
import Input from "../components/Input"
import { CartContext } from "../context/CartContext"
import "../styles/CartPage.css"

export default function CartPage() {
    const { items, add, remove, clear } = useContext(CartContext)
    const [formState, setFormState] = useState({
        first_name: "",
        last_name: "",
        address: "",
        apt_suite: "",
        city: "",
        postal: "",
    })

    const isValid = () => {
        return !!formState.first_name && !!formState.last_name && !!formState.address && !!formState.apt_suite && !!formState.city && !!formState.postal
    }

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
                    <div className="cart-form-row">
                        <Input onChange={(event) => onInputChange("first_name", event.target.value)} value={formState.first_name} required type="text" name="first_name" placeholder="First Name" />
                        <Input onChange={(event) => onInputChange("last_name", event.target.value)} value={formState.last_name} required type="text" name="last_name" placeholder="Last Name" />
                    </div>
                    <div className="cart-form-row">
                        <Input onChange={(event) => onInputChange("address", event.target.value)} value={formState.address} required type="text" name="address" placeholder="Address" />
                    </div>
                    <div className="cart-form-row">
                        <Input onChange={(event) => onInputChange("apt_suite", event.target.value)} required value={formState.apt_suite} type="text" name="apt_suite" placeholder="Apt. Suite" />
                    </div>
                    <div className="cart-form-row">
                        <Input onChange={(event) => onInputChange("city", event.target.value)} value={formState.city} type="text" name="city" placeholder="City" />
                        <Input onChange={(event) => onInputChange("postal", event.target.value)} required value={formState.postal} type="text" name="postal" placeholder="Postal Code" />
                    </div>
                    <button disabled={!isValid()} className="cart-form-submit">
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    )
}
