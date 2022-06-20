import React, { useEffect } from "react"
import PebbleCard from "./PebbleCard"
import "../styles/PebblesTab.css"
import { useState } from "react"
import PebbleView from "./PebbleView"
import { useParams } from "react-router-dom"

export default function PebblesTab() {
    const [currentPebble, setCurrentPebble] = useState(null)
    const [pebbles, setPebbles] = useState([])

    const { id: creator } = useParams()

    useEffect(() => {
        const fetchPebbles = async () => {
            const response = await fetch("/api/pebble?creator=" + creator)
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
                <PebbleCard key={pebble.id} {...pebble} onClick={() => setCurrentPebble(pebble)} />
            ))}
            {currentPebble && <PebbleView video_url={currentPebble.video_url} discription={currentPebble.name} time={new Date(currentPebble.created_on).toDateString()} avatar={currentPebble.creator.avatar} name={currentPebble.creator.name} onClose={() => setCurrentPebble(null)} />}
        </div>
    )
}
