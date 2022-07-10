import React, { useState, useRef } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import OTPInput from 'otp-input-react'
import image1 from '../../../assets/creatorloginimage.png'
import './Userlogin.css'
import { useNavigate } from 'react-router-dom'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import sponsored from '../../../assets/sponsored.png'
import { auth } from '../../../firebase'
import Footer from '../../Footer/Footer'

const Userlogin = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true);
    const number = useRef('');


    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user)
        }
    });
    const sendotp = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                setIsLogin(false);
            }
        }, auth);
        let appverifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, number.current.value, appverifier)
            .then(confirmationResult => {
                window.confirmationResult = confirmationResult;
                console.log(confirmationResult)
            })
            .catch(error => {
                console.log(error);
                // Error; SMS not sent
                // ...
            }
            );
    }
    const goback = () => {
        setIsLogin(true);
    }

    const [OTP, setOTP] = useState('');

    const login = () => {
        window.confirmationResult.confirm(OTP)
            .then(result => {
                console.log(result)
                // User signed in successfully.
                // ...
                navigate('/dashboard')
            })
            .catch(error => {
                console.log(error)
                // User couldn't sign in (bad verification code?)
                // ...
            });
    }

    return (
        <>
            <div className="loginuser">
                <div className='formuser'>
                    {isLogin ?
                        <>
                            {/* <div style={{ marginBottom: '150px' }}>
                                <h1>FANSEB.</h1>
                            </div> */}
                            <h1 style={{ fontSize: '50px' }}>WELCOME TO FANSEB STORE.</h1>
                            <p style={{ color: "rgba(0,0,0,0.4)", fontSize: '25px' }}>Dont't just watch, now shop from snackable videos.</p>
                            <p style={{ fontSize: '25px' }}>Login to continue</p>
                            <p style={{ color: "rgba(0,0,0,0.4)" }}>Phone Number</p>
                            <input type="text" id='numberinput' placeholder='Example: +1 9635478513' ref={number} />
                            <button onClick={sendotp} className='submitbtn' id='otp'>Send OTP</button>
                            <div id='recaptcha'></div>
                        </> :
                        <>
                            <svg onClick={goback} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-left pointer" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                            <p>Verification OTP</p>
                            <p style={{ color: "rgba(0,0,0,0.4)" }}>We have sent an OTP on your number</p>
                            <p style={{ color: "rgba(0,0,0,0.4)" }}>+91-6374266651</p>
                            <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} style={{ borderTop: 'none' }} />
                            <p>00:08</p>
                            <p style={{ color: "rgba(0,0,0,0.4)" }}>Didn't receive code? <span className="pointer" style={{ color: 'blue', fontSize: '10px' }}>Resend OTP</span></p>
                            <button className='submitbtn' onClick={login}>Submit OTP</button>

                        </>
                    }
                </div>
                <div style={{ backgroundColor: '#EA5824', height: '710px', width: '550px', marginLeft: '150px', marginTop: '100px' }}>
                    <img src={image1} alt="image1" width={448} height={750} style={{ marginLeft: "50px" }} />
                </div>
            </div>
            <div className='sponsored'>
                <h1 className='fw-bold'>Sponsored by</h1>
                <img src={sponsored} alt="sponsors" />
            </div>
            <Footer />
            {/* <div className='footer'>
                <div>
                    <p style={{ fontSize: '20px' }}>Fanseb</p>
                    <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.5)' }}>Dont't just watch, now shop from snackable videos.</p>
                    <a href="">
                        <img src={facebookicon} alt='facebook' className='ssicons'></img>
                    </a>
                    <a href="">
                        <img src={twittericon} alt='twitter' className='ssicons'></img>
                    </a>
                    <a href="">
                        <img src={linkedinicon} alt='linkedin' className='ssicons'></img>
                    </a>
                    <a href="">
                        <img src={instagramicon} alt='instagram' className='ssicons'></img>
                    </a>
                    <a href="">
                        <img src={youtubeicon} alt='youtube' className='ssicons'></img>
                    </a>
                </div>
                <div>
                    <p>Shopping Online</p>
                    <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.5)' }}>Order Status</p>
                    <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.5)' }}>Refund & Cancellations</p>
                    <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.5)' }}>Contact Us</p>
                </div>
                <div>
                    <p>Information</p>
                    <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.5)' }}>About Us</p>
                    <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.5)' }}>Privacy Policy</p>
                    <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.5)' }}>Terms & Conditions</p>
                    <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.5)' }}>Careers</p>
                </div>
            </div>
            <div className='copyright'>
                <p style={{ fontSize: '10px', color: 'rgba(0,0,0,0.5)', padding: '20px 0px 40px 0px' }}>FANSEB - © 2022. ALL RIGHTS RESERVED.</p>
            </div> */}
        </>
    )
}

export default Userlogin