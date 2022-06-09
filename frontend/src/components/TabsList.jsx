function Tab({ active, title, onClick }) {
	return (
		<button style={{ color: active ? 'red' : 'gray' }} onClick={onClick} className="tab-container">
			{ title }
		</button>
	)
}

export default function TabsList({active, tabs}){
	return (
		<div className="tabs-list-container">
			{tabs.map((tab, index)=><Tab key={index} active={index===active} title={tab.title} onClick={tab.onClick} />)}
		</div>
	)
}