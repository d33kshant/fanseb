import React from "react"
import "../styles/ProductCard.css"

export default function ProductCard({ name, image, category, link, selling_price, original_price }) {
    if (!original_price) original_price = selling_price
    return (
        <div className="product-card-container">
            <img className="product-image" src={image} alt={name} />
            <div className="product-info-container">
                <div className="product-category">{category}</div>
                <h3 className="product-name">{name}</h3>
                <div className="product-price-info">
                    <span>{selling_price}</span>
                    {original_price !== selling_price && <span>• {original_price}</span>}
                    {original_price !== selling_price && <span>• {100 - Math.round((selling_price / original_price) * 100)}% Off</span>}
                </div>
            </div>
            <button className="product-add-cart">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
            </button>
        </div>
    )
}
