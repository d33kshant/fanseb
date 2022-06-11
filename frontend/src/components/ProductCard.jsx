import React from "react"
import "../styles/ProductCard.css"

export default function ProductCard({
    name,
    image,
    category,
    link,
    selling_price,
    original_price,
}) {
    return (
        <div className="product-card-container">
            <img className="product-image" src={image} alt={name} />
            <div className="product-info-container">
                <div className="product-category">{category}</div>
                <h3 className="product-name">{name}</h3>
                <div className="product-price-info">
                    <span>{selling_price}</span>
                    {/* •<span>{original_price}</span>• */}
                    {/* <span>
                        {100 -
                            Math.round((selling_price / original_price) * 100)}
                        % Off
                    </span> */}
                </div>
            </div>
        </div>
    )
}
