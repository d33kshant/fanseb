import React from "react"
import { useRef } from "react"
import "../styles/Input.css"

export default function Input({ value, placeholder, ...props }) {
    const inputRef = useRef()
    return (
        <div onClick={() => inputRef.current.focus()} className="input-container">
            <input ref={inputRef} className="input-field" type="text" {...props} />
            <div className={`input-placeholder${value ? " placeholder-hide" : ""}`}>{placeholder}</div>
        </div>
    )
}
