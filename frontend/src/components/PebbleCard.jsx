import React from "react"
import { Link } from "react-router-dom"
import "../styles/PebbleCard.css"

export default function PebbleCard({ id, timestamp, image }) {
    return (
        <Link className="pebble-card-container" to={`/pebble/${id}`}>
            <img src={image} alt={`pebble ${id}`} className="pebble-image" />
            <div className="pebble-overlay"></div>
            <span className="pebble-timestamp">{timestamp}</span>
        </Link>
    )
}
