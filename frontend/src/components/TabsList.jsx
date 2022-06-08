function Tab({ title, onClick }) {
	return (
		<button onClick={onClick} className="tab-container">
			{ title }
		</button>
	)
}

export default function TabsList({tabs}){
	return (
		<div className="tabs-list-container">
			{tabs.map(tab=><Tab title={tab.title} onClick={tab.onClick} />)}
		</div>
	)
}