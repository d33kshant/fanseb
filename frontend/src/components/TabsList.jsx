import React from "react"
import "../styles/TabList.css"

function Tab({ active, title, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`tab-container ${active ? "active-tab" : ""}`}
        >
            {title}
        </button>
    )
}

export default function TabsList({ active, tabs }) {
    return (
        <div className="tabs-list-container">
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    active={index === active}
                    title={tab.title}
                    onClick={tab.onClick}
                />
            ))}
        </div>
    )
}
