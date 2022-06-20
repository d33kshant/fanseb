import React from "react"
import CollectionCard from "./CollectionCard"
import "../styles/CollectionTab.css"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function CollectionTab() {
    const [collections, setCollections] = useState([])

    const { id: creator } = useParams()

    useEffect(() => {
        const fetchCollection = async () => {
            const response = await fetch("/api/collection?creator=" + creator)
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
