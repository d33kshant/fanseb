import React from "react"
import ProductCard from "./ProductCard"
import "../styles/ProductTab.css"

export default function ProductTab() {
    const products = [
        {
            id: 100,
            name: "Natural Vitamin C Serum",
            image: "/avatar.png",
            selling_price: 600,
            original_price: 675,
            category: "CS Essentials",
        },
    ]
    return (
        <div className="producr-grid-container">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}
