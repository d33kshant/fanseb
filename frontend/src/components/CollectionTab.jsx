import React from "react"
import CollectionCard from "./CollectionCard"
import "../styles/CollectionTab.css"

export default function CollectionTab() {
    const collections = [
        {
            id: 0,
            name: "Build your Travel Beauty Kit",
            image: "https://via.placeholder.com/400",
        },
        {
            id: 1,
            name: "My Everyday Makeup Essentials ✨",
            image: "https://via.placeholder.com/400",
        },
    ]
    return (
        <div className="collection-grid-container">
            {collections.map((collection) => (
                <CollectionCard
                    key={collection.id}
                    name={collection.name}
                    image={collection.image}
                    link={`/collection/${collection.id}`}
                />
            ))}
        </div>
    )
}
