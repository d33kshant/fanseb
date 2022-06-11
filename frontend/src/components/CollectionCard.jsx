import React from "react"
import { Link } from "react-router-dom"
import "../styles/CollectionCard.css"

export default function CollectionCard({ name, image, link }) {
    return (
        <Link to={link} className="collection-card-container">
            <img className="collection-image" src={image} alt={name} />
            <div className="collection-name-overlay"></div>
            <p className="collection-name">{name}</p>
        </Link>
    )
}
