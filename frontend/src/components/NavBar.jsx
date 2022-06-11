import React from "react"
import "../styles/NavBar.css"

export default function NavBar() {
    return (
        <div className="navbar-background">
            <div className="navbar-container">
                <div className="navbar-logo-container">FANSEB.</div>
                <div className="navbar-search-container">
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="gray"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input
                        className="navbar-search-input"
                        placeholder="What are you looking for?"
                    />
                </div>
                <div className="navbar-links-container">
                    <a href="/cart">
                        <svg
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </a>
                    <a href="/whishlist">
                        <svg
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </a>
                    <a href="/me">
                        <svg
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
