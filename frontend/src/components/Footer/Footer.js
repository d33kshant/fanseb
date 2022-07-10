import React from 'react';
import facebookicon from '../../assets/Vectorfacebook.png'
import twittericon from '../../assets/Vectortwitter.png'
import instagramicon from '../../assets/Vectorinstagram.png'
import youtubeicon from '../../assets/Vectoryoutube.png'
import linkedinicon from '../../assets/Vectorlinkedin.png'

import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
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
            </div>
        </div>
    );
};

export default Footer;