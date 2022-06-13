import React from "react"
import ProductCard from "./ProductCard"
import "../styles/ProductTab.css"

export default function ProductTab() {
    const products = [
        {
            id: 100,
            name: "Natural Vitamin C Serum",
            image:
                "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            selling_price: 600,
            original_price: 675,
            category: "CS Essentials",
        },
    ]
    return (
        <div className="product-grid-container">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}
