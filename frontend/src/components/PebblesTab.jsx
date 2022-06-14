import React from "react"
import PebbleCard from "./PebbleCard"
import "../styles/PebblesTab.css"
import { useState } from "react"
import PebbleView from "./PebbleView"

export default function PebblesTab() {
    const [currentPebble, setCurrentPebble] = useState(null)
    const pebbles = [
        {
            id: 152,
            image: "https://images.unsplash.com/photo-1655117070431-0ca113ca5106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            timestamp: "15:00",
        },
        {
            id: 156,
            image: "https://images.unsplash.com/photo-1655117070431-0ca113ca5106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            timestamp: "15:00",
        },
        {
            id: 158,
            image: "https://images.unsplash.com/photo-1655117070431-0ca113ca5106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            timestamp: "15:00",
        },
    ]
    return (
        <div className="pebble-grid-container">
            {pebbles.map((pebble) => (
                <PebbleCard key={pebble.id} {...pebble} onClick={() => setCurrentPebble(pebble.id)} />
            ))}
            {currentPebble && <PebbleView onClose={() => setCurrentPebble(null)} />}
        </div>
    )
}
