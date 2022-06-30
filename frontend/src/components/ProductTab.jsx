import React, { useState } from "react"
import ProductCard from "./ProductCard"
import "../styles/ProductTab.css"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ProductTab() {
    const [products, setProducts] = useState([])

    const { id: creator } = useParams()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("/api/product?creator=" + creator)
            const data = await response.json()
            if (data) {
                if (data.error) {
                    console.log(data.payload)
                    return alert(data.error)
                }
                setProducts(data)
            }
        }
        fetchProducts()
    }, [])

    return (
        <div className="product-grid-container">
            {products.map((product) => (
                <ProductCard key={product._id} id={product._id} {...product} />
            ))}
        </div>
    )
}
