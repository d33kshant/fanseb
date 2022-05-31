import React, { useState } from 'react'
import './Creatorprofile.css'
import { useAuth } from '../../../context/FirebaseContext';

const Creatorprofile = () => {
    const { currentUser } = useAuth();
    console.log(currentUser)
    const [creator, setCreator] = useState({
        name: "",
        phonenumber: currentUser.phoneNumber,
        username: "",
        email: "",
        domain: "",
        instagramusername: "",
        instagramcount: "",
        youtubeusername: "",
        youtubecount: "",
        facebookusername: "",
        facebookcount: "",
        twitterusername: "",
        twittercount: "",
    });
    const changevalue = (e) => {
        setCreator({ ...creator, [e.target.name]: e.target.value });
    }
    const [formpart1, setFormpart1] = useState(true);
    const onnextstep = () => {
        if (creator.name !== '' && creator.username !== '' && creator.email !== '' && creator.domain !== '') {
            setFormpart1(false);
        }
        else {
            alert('Please fill all the details');
        }
    }
    const onprevious = () => {
        setFormpart1(true);
    }
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const onChangePicture = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handlesubmit = async () => {
        if ((creator.instagramusername === '' && creator.instagramcount === '') || (creator.youtubeusername === '' && creator.youtubecount === '') || (creator.facebookusername === '' && creator.facebookcount === '') || (creator.twitterusername === '' && creator.twittercount === '')) {
            alert('Please fill any one social media account details');
        }
        else {
            const response = await fetch('http://localhost:5000/api/auth/createcreator', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(creator)
            })
            const data = await response.json();
            console.log(data);
        }
    }

    return (
        <div style={{ marginBottom: '100px' }}>
            <div>
                <nav className="navbar" style={{ borderBottom: 'solid #e9eaee 2px' }}>
                    <div className="container-fluid">
                        <a className="navbar-brand mx-5 px-5 py-3" href='/'><h3>FANSEB.</h3></a>
                        <form className="d-flex mx-5 px-5" role="search">
                            <i className="fa-regular fa-user fa-2x"></i>
                        </form>
                    </div>
                </nav>
            </div>
            <div className='creatordetailsform container'>
                {formpart1 ?
                    <>
                        <div className="formpart1">
                            <p style={{ fontSize: '20px' }}><span style={{ padding: '8px 12px 12px 12px', backgroundColor: 'black', color: 'white', marginRight: '10px' }}>01</span> Profile Details</p>
                            <p style={{ fontSize: '20px' }}><span style={{ padding: '8px 12px 12px 12px', backgroundColor: 'white', color: 'black', marginRight: '10px', border: 'solid black 1px' }}>02</span>Social Media Links</p>
                        </div>
                        <div>
                            <hr />
                            <h3>Fill your Personal Details</h3>
                            <div className='my-4'>
                                {
                                    imgData === null ?
                                        <>
                                            <i className="fa-solid fa-user fa-5x" style={{ backgroundColor: 'rgba(0,0,0,0.05)', padding: '15px', borderRadius: '30px' }}></i>
                                            <label htmlFor="imageinput"><i className="fa-solid fa-camera" style={{ color: 'white', backgroundColor: '#2597df', marginLeft: '-20px', padding: '7px', borderRadius: '50%', border: 'solid white 4px' }}></i></label>
                                            <input type="file" id='imageinput' style={{ display: 'none' }} onChange={onChangePicture} />
                                        </> :
                                        <img src={imgData} alt="" width={100} height={100} style={{ borderRadius: '50%' }} />
                                }
                            </div>
                            <p style={{ fontSize: '20px' }}>Display Name  <span style={{ color: 'red' }}>*</span></p>
                            <input type="text" id='numberinput' value={creator.name} onChange={changevalue} name="name" />
                            <p style={{ fontSize: '20px' }}>Username (avoid special characters)  <span style={{ color: 'red' }}>*</span></p>
                            <input type="text" id='numberinput' value={creator.username} onChange={changevalue} name="username" />
                            <p style={{ fontSize: '20px' }}>Email Address  <span style={{ color: 'red' }}>*</span></p>
                            <input type="email" id='numberinput' value={creator.email} onChange={changevalue} name="email" />
                            <p style={{ fontSize: '20px' }}>Domain:</p>
                            <div className="dropdown" style={{ width: '30%' }}>
                                <select className="form-select" aria-label="Default select example" value={creator.domain} onChange={changevalue} name="domain">
                                    <option default>Select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='d-flex flex-row-reverse'>
                                <button onClick={onnextstep} style={{ padding: '10px 30px', color: 'white', backgroundColor: 'orange', borderRadius: '10px', border: 'none', marginTop: '20px' }}>Next Step</button>
                            </div>
                        </div>
                    </> :
                    <>
                        <div className="formpart1">
                            <p style={{ fontSize: '20px' }}><span style={{ padding: '8px 12px 12px 12px', backgroundColor: 'orange', color: 'white', marginRight: '10px' }}><i className="fa-solid fa-check"></i></span> Profile Details</p>
                            <p style={{ fontSize: '20px' }}><span style={{ padding: '8px 12px 12px 12px', backgroundColor: 'black', color: 'white', marginRight: '10px' }}>02</span>Social Media Links</p>
                        </div>
                        <div>
                            <hr />
                            <h3>Social Media Links</h3>
                            <p style={{ color: 'rgba(0,0,0,0.4)' }}>It is mandatory to provide atleast one social media handle and its follower/subscriber count.</p>
                            <div className='d-flex justify-content-between'>
                                <p>
                                    Instagram Username
                                </p>
                                <p className='mx-5'>
                                    Followers Count
                                </p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <input type="text" id='numberinput' style={{ width: '50%' }} value={creator.instagramusername} onChange={changevalue} name="instagramusername" />
                                <input type="text" id='numberinput' style={{ width: '32%' }} value={creator.instagramcount} onChange={changevalue} name="instagramcount" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>
                                    Youtube Channel Name
                                </p>
                                <p className='mx-5'>
                                    Subscribers Count
                                </p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <input type="text" id='numberinput' style={{ width: '50%' }} value={creator.youtubeusername} onChange={changevalue} name="youtubeusername" />
                                <input type="text" id='numberinput' style={{ width: '32%' }} value={creator.youtubecount} onChange={changevalue} name="youtubecount" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>
                                    Facebook Username
                                </p>
                                <p className='mx-5'>
                                    Followers Count
                                </p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <input type="text" id='numberinput' style={{ width: '50%' }} value={creator.facebookusername} onChange={changevalue} name="facebookusername" />
                                <input type="text" id='numberinput' style={{ width: '32%' }} value={creator.facebookcount} onChange={changevalue} name="facebookcount" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>
                                    Twitter Username
                                </p>
                                <p className='mx-5'>
                                    Followers Count
                                </p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <input type="text" id='numberinput' style={{ width: '50%' }} value={creator.twitterusername} onChange={changevalue} name="twitterusername" />
                                <input type="text" id='numberinput' style={{ width: '32%' }} value={creator.twittercount} onChange={changevalue} name="twittercount" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <button onClick={onprevious} style={{ padding: '10px 30px', borderRadius: '10px', marginTop: '20px', backgroundColor: 'white', border: 'solid rgba(0,0,0,0.2) 1px' }}>Prev Step</button>
                                <button onClick={handlesubmit} style={{ padding: '10px 30px', color: 'white', backgroundColor: 'orange', borderRadius: '10px', border: 'none', marginTop: '20px' }}>Next Step</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div >
    )
}

export default Creatorprofile