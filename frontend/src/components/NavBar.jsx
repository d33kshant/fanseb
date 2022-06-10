import React from "react"
import "../styles/NavBar.css"

export default function NavBar() {
    return (
        <div className="navbar-background">
            <div className="navbar-container">
                <div className="navbar-logo-container">FANSEB.</div>
                <div className="navbar-search-container">
                    <input
                        className="navbar-search-input"
                        placeholder="What are you looking for?"
                    />
                </div>
                <div className="navbar-links-container">
                    Bag WhishList Profile
                </div>
            </div>
        </div>
    )
}
