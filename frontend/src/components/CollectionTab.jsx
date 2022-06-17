import React from "react"
import CollectionCard from "./CollectionCard"
import "../styles/CollectionTab.css"
import { useState } from "react"
import { useEffect } from "react"

export default function CollectionTab() {
    const [collections, setCollections] = useState([])

    const creator = { id: "random-creator-id" }

    useEffect(() => {
        const fetchCollection = async () => {
            const response = await fetch("/api/collection?creator=" + creator.id)
            const data = await response.json()
            if (data) {
                if (data.error) return alert(data.error)
                setCollections(data)
            }
        }
        fetchCollection()
    }, [])

    return (
        <div className="collection-grid-container">
            {collections.map((collection) => (
                <CollectionCard key={collection.id} name={collection.name} image={collection.image} link={`/collection/${collection.id}`} />
            ))}
        </div>
    )
}
