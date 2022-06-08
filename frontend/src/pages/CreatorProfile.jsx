import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CollectionTab from '../components/CollectionTab'
import PebbelsTab from '../components/PebblesTab'
import ProductsTab from '../components/ProductTab'
import TabsList from '../components/TabsList'
import "../styles/CreatorProfile.css"

export default function CreatorProfile() {
	
	const { id } = useParams()
	const [creator, setCreator] = useState(null)
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
			onClick: ()=>setTab(0)
		},
		{
			title: "Products",
			onClick: ()=>setTab(1)
		},
		{
			title: "Pebbles",
			onClick: ()=>setTab(2)
		}
	]

	const tabs = [
		<CollectionTab/>,
		<ProductsTab />,
		<PebbelsTab />
	]
	
	return (
		<div className="creator-profile-container">
			<TabsList tabs={tabsList} />
			{tabs[tab]}
		</div>
	)
}