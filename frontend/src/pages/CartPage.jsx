import React, { useContext, useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import CartItem from "../components/CartItem"
import Input from "../components/Input"
import { CartContext } from "../context/CartContext"
import "../styles/CartPage.css"

export default function CartPage() {
    const { items, add, remove, clear } = useContext(CartContext)

    // const [cartItems, setCartItems] = useState([])

    // useEffect(() => {
    //     for (let i = 0; i < items.length; i++) {
    //         const item = items[i]
    //         fetch(`/api/product?id=${item.id}`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 if (data.error) return alert(data.error)
    //                 const _items = [...cartItems]
    //                 _items.push({ id: item.id, count: item.quantity, ...data })
    //                 setCartItems(_items)
    //             })
    //     }
    //     return () => setCartItems([])
    // }, [items])

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
        handlePayment()
    }

    const onInputChange = (key, value) => {
        const _formState = { ...formState }
        _formState[key] = value
        setFormState(_formState)
    }

    const initPayment = (data) => {
        const options = {
            key: "rzp_test_FWaPBQKjitY4pj",
            amount: data.amount,
            currency: data.currency,
            name: "Fanseb",
            description: "Test Transaction",
            image: "",
            order_id: data.id,
            handler: async (response) => {
                console.log(response)
                try {
                    const verifyUrl = "http://localhost:5000/api/payment/verify"
                    const { data } = await axios.post(verifyUrl, response)
                    if (data.error) return alert(data.error)
                    const { data: response } = axios.post("http://localhost:5000/api/order", {
                        order_details: formState,
                        order_items: items,
                        order_paid: true,
                        payment_data: data,
                    })
                    alert(response.message)
                    clear()
                } catch (error) {
                    console.log(error)
                }
            },
            theme: {
                color: "#3399cc",
            },
        }
        const rzp1 = new window.Razorpay(options)
        rzp1.open()
    }

    const handlePayment = async () => {
        try {
            const orderUrl = "http://localhost:5000/api/payment/orders"
            const totaAmount = items.reduce((prev, current) => prev + current.selling_price * current.count, 0)
            const { data } = await axios.post(orderUrl, { amount: totaAmount })
            initPayment(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="cart-page-container">
            <div className="cart-page-items">
                <h3 className="cart-item-title">Your Cart ({items.reduce((p, c) => p + c.quantity, 0)})</h3>
                {items.length > 0 ? items.map((item) => <CartItem id={item.id} key={item.id} count={item.count} onAddClick={() => add(item.id)} onRemoveClick={() => remove(item.id)} />) : <p>You cart is empty, Try adding some product.</p>}
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
                    <div>
                        <span>
                            <b>Total Price :</b>
                        </span>
                        <span>₹{items.reduce((prev, current) => prev + current.selling_price * current.count, 0)}</span>
                    </div>
                    <button disabled={!isValid()} className="cart-form-submit">
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    )
}
