import React, { useState, useEffect } from "react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "../styles/CartItem.css"

export default function CartItem({ id, count, onAddClick, onRemoveClick }) {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)
    const { removeAll } = useContext(CartContext)

    useEffect(() => {
        const fetchItem = async () => {
            const response = await fetch(`/api/product?id=${id}`)
            const data = await response.json()
            setLoading(false)
            if (data.erro) return alert(data.error)
            setItem(data)
        }
        fetchItem()
    }, [])

    const discount = item && item.original_price ? Math.floor(100 - (item.selling_price / item.original_price) * 100) : 0

    return (
        <div className="cart-item-container">
            <button className="remove-cart-item" onClick={() => removeAll(id)}>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            {<img className="cart-item-image" src={(item && item.image) || "product.png"} alt="" />}
            <div className="cart-item-info">
                {!loading && item ? (
                    <>
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-cateogry">{item.category}</div>
                        <div className="cart-item-price-info">
                            <div className="cart-item-price">₹{item.selling_price}</div>
                            {discount > 0 && (
                                <>
                                    <span className="cart-item-original-price">₹{item.original_price}</span>
                                    <span className="cart-item-discount">{discount}% Off</span>
                                </>
                            )}
                        </div>
                        <div className="cart-item-control">
                            <button className="cart-item-add-button" onClick={onAddClick}>
                                +
                            </button>
                            <span>{count}</span>
                            <button className="cart-item-remove-button" onClick={onRemoveClick}>
                                -
                            </button>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}
