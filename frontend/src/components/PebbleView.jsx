import React from "react"
import "../styles/PebbleView.css"

export default function PebbleView({ onClose }) {
    const creator = "Lvaish Arora"
    const date = "05/20/2022"
    const discription = "Do this for clear underarms"
    return (
        <div className="pebble-page-backgoround" onClick={onClose}>
            <button className="pebble-page-close-button">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div className="pebble-page-container" onClick={(event) => event.stopPropagation()}>
                <div className="pebble-page-video-section">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </div>
                <div className="pebble-page-info-section">
                    <div className="pebble-info-header">
                        <img src="/avatar.png" height={38} alt="avatar" />
                        <div className="pebble-header-info">
                            <p className="pebble-header-creator">{creator}</p>
                            <p className="pebble-header-date">{date}</p>
                        </div>
                    </div>
                    <div className="pebble-info-discription">{discription}</div>
                </div>
            </div>
        </div>
    )
}
