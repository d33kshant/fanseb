import React, { useEffect } from "react"
import PebbleCard from "./PebbleCard"
import "../styles/PebblesTab.css"
import { useState } from "react"
import PebbleView from "./PebbleView"

export default function PebblesTab() {
    const [currentPebble, setCurrentPebble] = useState(null)
    const [pebbles, setPebbles] = useState([])

    const creator = { id: "some-random-id" }

    useEffect(() => {
        const fetchPebbles = async () => {
            const response = await fetch("/api/collection?creator=" + creator.id)
            const data = await response.json()
            if (data) {
                if (data.error) return alert(data.error)
                setPebbles(data)
            }
        }
        fetchPebbles()
    })

    return (
        <div className="pebble-grid-container">
            {pebbles.map((pebble) => (
                <PebbleCard key={pebble.id} {...pebble} onClick={() => setCurrentPebble(pebble.id)} />
            ))}
            {currentPebble && <PebbleView onClose={() => setCurrentPebble(null)} />}
        </div>
    )
}
