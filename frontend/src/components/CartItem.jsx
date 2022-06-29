import React, { useState, useEffect } from "react"

export default function CartItem({ id, count }) {
    // const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    const item = {
        name: "Make Up Kit",
        original_price: 250,
        selling_price: 200,
        category: "Makeup",
    }

    // useEffect(() => {
    // 	const response = await fetch(`/api/products?id=${id}`)
    // 	const data = await response.json()
    // 	setLoading(false)
    // 	if (data.erro) return alert(data.error)
    // 	setItem(data)
    // }, [])

    const discount = item.original_price ? Math.floor(100 - (item.selling_price / item.original_price) * 100) : 0

    return (
        <div className="cart-item-container">
            {!loading && item ? (
                <>
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-cateogry">{item.category}</div>
                    <div className="cart-item-price-info">
                        <div className="cart-item-price">{item.selling_price}</div>
                        {discount > 0 && (
                            <>
                                <span className="cart-item-original-price">{item.original_price}</span> <span className="cart-item-discount">{discount}% Off</span>
                            </>
                        )}
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}