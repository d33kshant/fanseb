import React from "react"
import "../styles/PebbleView.css"

export default function PebbleView({ name, avatar, video_url, time, discription, onClose }) {
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
                    <video controls={true} className="pebble-video" src={video_url} autoPlay={true} />
                </div>
                <div className="pebble-page-info-section">
                    <div className="pebble-info-header">
                        <img src={avatar} height={38} alt="avatar" />
                        <div className="pebble-header-info">
                            <p className="pebble-header-creator">{name}</p>
                            <p className="pebble-header-date">{time}</p>
                        </div>
                    </div>
                    <div className="pebble-info-discription">{discription}</div>
                </div>
            </div>
        </div>
    )
}
