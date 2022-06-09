import { useState } from "react"
// import { useParams } from 'react-router-dom'
import CollectionTab from "../components/CollectionTab"
import PebbelsTab from "../components/PebblesTab"
import ProductsTab from "../components/ProductTab"
import TabsList from "../components/TabsList"
import "../styles/CreatorProfile.css"

export default function CreatorProfile() {
    // const { id } = useParams()
    // const [creator] = useState({
    // 	avatar: "/avatar.png",
    // 	name: "Lavisha Arora",
    // 	follower: 177,
    // 	bio: "🔷 Professional Makeup Artist & Educator",
    // 	inFollow: false,
    // })
    const creator = {
        avatar: "/avatar.png",
        name: "Lavisha Arora",
        follower: 177,
        bio: "🔷 Professional Makeup Artist & Educator",
        inFollow: false,
    }
    const [tab, setTab] = useState(0)

    // useEffect(()=>{
    // 	const fetchCreator = async () => {
    // 		const response = await fetch('/api/creator/'+ id)
    // 		const data = await response.json()

    // 		if (data.error) return alert(data.error)
    // 		setCreator(data)
    // 	}
    // 	fetchCreator()
    // }, [])

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
            element: <PebbelsTab />,
            onClick: () => setTab(2),
        },
    ]

    return (
        <div className="creator-profile-container">
            <CreatorProfile creator={creator} />
            <TabsList active={tab} tabs={tabsList} />
            {tabsList[tab].element}
        </div>
    )
}
