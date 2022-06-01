import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import './Creatorlogin.css'
import image1 from '../../../assets/logincreatorimage.png';
import OTPInput from 'otp-input-react';
import { auth } from '../../../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const Creatorlogin = () => {
    const navigate = useNavigate();
    const number = useRef('');
    const [isLogin, setIsLogin] = useState(true);
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
                navigate('/creatorprofile')
            })
            .catch(error => {
                console.log(error)
                // User couldn't sign in (bad verification code?)
                // ...
            });
    }

    return (
        <div className="logincreator">
            <div>
                <img src={image1} alt="image1" width={620} height={600} style={{ marginLeft: "0px" }} />
            </div>
            <div className='form'>
                {isLogin ?
                    <>
                        <h1>FANSEB.</h1>
                        <br />
                        <p>Apply/Login to FANSEB</p>
                        <p style={{ color: "rgba(0,0,0,0.4)" }}>If you’re an existing creatorpreneur, use the same mobile number again to view dashboard.</p>
                        <p style={{ color: "rgba(0,0,0,0.4)" }}>Phone Number</p>
                        <input type="text" id='numberinput' placeholder='+915632148957' ref={number} />
                        <button onClick={sendotp} className='submitbtn'>Send OTP</button>
                        <div id="recaptcha"></div>
                        <p style={{ textAlign: 'center' }}>You are confirming to our <span style={{ color: '#2597DF' }}>Terms of Use</span> and <span style={{ color: '#2597DF' }}>Privacy Policy</span></p>
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
        </div>
    )
}

export default Creatorlogin