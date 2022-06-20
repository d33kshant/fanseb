import React, { useState, useEffect } from "react"
import CollectionTab from "../components/CollectionTab"
import PebblesTab from "../components/PebblesTab"
import ProductsTab from "../components/ProductTab"
import TabsList from "../components/TabsList"
import ProfileHeader from "../components/CreatorProfileHeader"
import "../styles/CreatorProfile.css"
import { useParams } from "react-router-dom"

export default function CreatorProfile() {
    const [creator, setCreator] = useState({})
    const [tab, setTab] = useState(0)

    const { id } = useParams()

    useEffect(() => {
        const fetchCreator = async () => {
            const response = await fetch("/api/creator/" + id)
            const data = await response.json()
            if (data.error) return alert(data.error)
            setCreator(data)
        }
        fetchCreator()
    }, [])

    const tabsList = [
        {
            title: "Collection",
            element: <CollectionTab />,
            onClick: () => setTab(0),
        },
        {
            title: "Products",
            element: <ProductsTab />,
            onClick: () => setTab(1),
        },
        {
            title: "Pebbles",
            element: <PebblesTab />,
            onClick: () => setTab(2),
        },
    ]

    return (
        <div className="creator-profile-container">
            <ProfileHeader creator={creator} />
            <TabsList active={tab} tabs={tabsList} />
            {tabsList[tab].element}
        </div>
    )
}
