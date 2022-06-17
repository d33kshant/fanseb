import React, { useState } from "react"
import ProductCard from "./ProductCard"
import "../styles/ProductTab.css"
import { useEffect } from "react"

export default function ProductTab() {
    const [products, setProducts] = useState([])

    const creator = { id: "somerandom-id" }

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("/api/product?creator=" + creator.id)
            const data = await response.json()
            if (data) {
                if (data.error) return alert(data.error)
                setProducts(data)
            }
        }
    }, [])

    return (
        <div className="product-grid-container">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}
