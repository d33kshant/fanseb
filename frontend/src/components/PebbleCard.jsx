import React from "react"
import "../styles/PebbleCard.css"

export default function PebbleCard({ id, timestamp, image, onClick }) {
    return (
        <div onClick={onClick} className="pebble-card-container" to={`/pebble/${id}`}>
            <img src={image} alt={`pebble ${id}`} className="pebble-image" />
            <div className="pebble-overlay"></div>
            <span className="pebble-timestamp">{timestamp}</span>
        </div>
    )
}
