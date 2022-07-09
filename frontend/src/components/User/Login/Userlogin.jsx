import React, { useState, useEffect } from "react"
import OTPInput from "otp-input-react"
import image1 from "../../../assets/creatorloginimage.png"
import facebookicon from "../../../assets/Vectorfacebook.png"
import twittericon from "../../../assets/Vectortwitter.png"
import instagramicon from "../../../assets/Vectorinstagram.png"
import youtubeicon from "../../../assets/Vectoryoutube.png"
import linkedinicon from "../../../assets/Vectorlinkedin.png"
import "./Userlogin.css"
import { useNavigate } from "react-router-dom"
import setCookie from "../../hooks/setCookie"
import removeCookie from "../../hooks/removeCookie"
import getCookie from "../../hooks/getCookie"

const Userlogin = (props) => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    // const number = useRef('');
    const [credentials, setCredentials] = useState({ number: "" })
    const [user, setUser] = useState(null)

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const sendotp = async () => {
        let phonenumber = credentials.number
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ phonenumber }),
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            setIsLogin(false)
            setUser(json.user)
            setTimeout(() => {
                navigate("/cart")
            }, 10000)
        } else {
            alert(json.error)
        }
    }
    const goback = () => {
        setIsLogin(true)
    }

    const [OTP, setOTP] = useState("")

    const login = async () => {
        const response = await fetch("http://localhost:5000/api/auth/verifyotp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userID: user._id, otp: OTP }),
        })
        const json = await response.json()
        console.log(json)

        if (json.success) {
            removeCookie("token")
            setCookie("token", json.token)
            navigate("/")
        }
    }

    const isLoggedIn = async () => {
        console.log("IsLoggedIn")
        const token = getCookie("token")
        const req = await fetch("http://localhost:5000/api/auth/authuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        })
        const res = await req.json()
        console.log(res)

        if (res.success) {
            console.log(res.success)
            navigate("/")
        } else {
            navigate("/userlogin")
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])

    return (
        <>
            <div className="loginuser">
                <div className="formuser">
                    {isLogin ? (
                        <>
                            <div style={{ marginBottom: "150px" }}>
                                <h1>FANSEB.</h1>
                            </div>
                            <h1 style={{ fontSize: "50px" }}>WELCOME TO FANSEB STORE.</h1>
                            <p style={{ color: "rgba(0,0,0,0.4)", fontSize: "25px" }}>Dont't just watch, now shop from snackable videos.</p>
                            <p style={{ fontSize: "25px" }}>Login to continue</p>
                            <p style={{ color: "rgba(0,0,0,0.4)" }}>Phone Number</p>
                            <input type="text" id="numberinput" name="number" placeholder="Example: +1 9635478513" value={credentials.number} onChange={onchange} />
                            <button onClick={sendotp} className="submitbtn" id="otp">
                                Send OTP
                            </button>
                            <div id="recaptcha"></div>
                        </>
                    ) : (
                        <>
                            <svg onClick={goback} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-left pointer" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                            <p>Verification OTP</p>
                            <p style={{ color: "rgba(0,0,0,0.4)" }}>We have sent an OTP on your number</p>
                            <p style={{ color: "rgba(0,0,0,0.4)" }}>{credentials.number}</p>
                            <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} style={{ borderTop: "none" }} />
                            <p>00:08</p>
                            {/* <p style={{ color: "rgba(0,0,0,0.4)" }}>Didn't receive code? <span className="pointer" style={{ color: 'blue', fontSize: '10px' }}>Resend OTP</span></p> */}
                            <p style={{ color: "rgba(0,0,0,0.4)" }}>
                                Didn't receive code? <span className="pointer">Resend OTP</span>
                            </p>
                            <button className="submitbtn" onClick={login}>
                                Submit OTP
                            </button>
                        </>
                    )}
                </div>
                <div style={{ backgroundColor: "#EA5824", height: "710px", width: "550px", marginLeft: "150px", marginTop: "100px" }}>
                    <img src={image1} alt="image1" width={448} height={750} style={{ marginLeft: "50px" }} />
                </div>
            </div>
            <div className="footer">
                <div>
                    <p style={{ fontSize: "20px" }}>Fanseb</p>
                    <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.5)" }}>Dont't just watch, now shop from snackable videos.</p>
                    <img src={facebookicon} alt="facebook" className="ssicons"></img>
                    <img src={twittericon} alt="twitter" className="ssicons"></img>
                    <img src={linkedinicon} alt="linkedin" className="ssicons"></img>
                    <img src={instagramicon} alt="instagram" className="ssicons"></img>
                    <img src={youtubeicon} alt="youtube" className="ssicons"></img>
                </div>
                <div>
                    <p>Shopping Online</p>
                    <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.5)" }}>Order Status</p>
                    <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.5)" }}>Refund & Cancellations</p>
                    <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.5)" }}>Contact Us</p>
                </div>
                <div>
                    <p>Information</p>
                    <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.5)" }}>About Us</p>
                    <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.5)" }}>Privacy Policy</p>
                    <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.5)" }}>Terms & Conditions</p>
                    <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.5)" }}>Careers</p>
                </div>
            </div>
            <div className="copyright">
                <p style={{ fontSize: "10px", color: "rgba(0,0,0,0.5)", padding: "20px 0px 40px 0px" }}>FANSEB - © 2022. ALL RIGHTS RESERVED.</p>
            </div>
        </>
    )
}

export default Userlogin
