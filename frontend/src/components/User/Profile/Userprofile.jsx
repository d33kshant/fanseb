import React, { useState, useRef } from 'react'
import defaultImg from '../../../assets/defaultImg.png'
import './UserProfile.css'

const Userprofile = () => {
    const day = useRef();
    const month = useRef();
    const year = useRef();
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const onChangePicture = e => {
        if (e.target.files[0]) {
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const [user, setUser] = useState({
        name: '',
        phonenumber: '',
        email: '',
        dob: '',
        gender: ''
    })
    const changevalue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handlesubmit = async () => {
        user.dob = day.current.value + "-" + month.current.value + '-' + year.current.value;
        if (user.name && user.phonenumber && user.email && user.dob && user.gender) {
            console.log(user)
            const response = await fetch('http://localhost:5000/api/auth/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            const data = await response.json();
            console.log(data);
        }
        else {
            console.log(user)
        }
    }

    return (
        <div className='container' style={{ width: '30%' }}>
            <div className='my-4'>


                {
                    imgData === null ?
                        <>
                            {/* <i className="fa-solid fa-mountain-sun fa-4x" style={{ backgroundColor: '#e2e2ff', padding: '15px', borderRadius: '30px', color: 'white' }}></i>
                            <label htmlFor="imageinput"><i className="fa-solid fa-camera" style={{ color: 'white', backgroundColor: '#2597df', marginLeft: '-20px', padding: '7px', borderRadius: '50%', border: 'solid white 4px' }}></i></label> */}
                            <label htmlFor="imageinput">
                                <div className='defaultImg'>
                                    <img className='w-full' src={defaultImg} alt="" />
                                    <div className='cameraPNG'>
                                        <i className="bi bi-camera"></i>
                                    </div>
                                </div>
                            </label>
                            <input type="file" id='imageinput' style={{ display: 'none' }} onChange={onChangePicture} />
                        </> :
                        <img src={imgData} alt="" width={100} height={100} style={{ borderRadius: '50%' }} />
                }
            </div>
            <p style={{ fontSize: '20px' }}>Your full name</p>
            <input type="text" id='numberinput' value={user.name} name='name' onChange={changevalue} />
            <p style={{ fontSize: '20px' }}>Your phone number</p>
            <input type="text" id='numberinput' value={user.phonenumber} name='phonenumber' onChange={changevalue} />
            <p style={{ fontSize: '20px' }}>Your email address</p>
            <input type="email" id='numberinput' value={user.email} name='email' onChange={changevalue} />
            <p style={{ fontSize: '20px' }}>Date of Birth</p>
            <div className='d-flex justify-content-start'>
                <input type="text" id='numberinput' style={{ width: '10%' }} placeholder="DD" ref={day} />
                <input type="text" id='numberinput' style={{ width: '10%', marginLeft: '20px' }} placeholder="MM" ref={month} />
                <input type="text" id='numberinput' style={{ width: '10%', marginLeft: '20px' }} placeholder="YYYY" ref={year} />
            </div>
            <p style={{ fontSize: '20px' }}>Gender</p>
            <div onChange={changevalue}>
                <input type="radio" className="btn-check" name="gender" id="option1" autoComplete="off" value="male" />
                <label className="btn btn-outline-secondary mx-3" htmlFor="option1">Male</label>
                <input type="radio" className="btn-check" name="gender" id="option2" autoComplete="off" value="female" />
                <label className="btn btn-outline-secondary mx-3" htmlFor="option2">Female</label>
                <input type="radio" className="btn-check" name="gender" id="option3" autoComplete="off" value="others" />
                <label className="btn btn-outline-secondary mx-3" htmlFor="option3">Other</label>
            </div>
            <button className='submitbtn my-5' style={{ borderRadius: '15px' }} onClick={handlesubmit}>Submit</button>
        </div>
    )
}

export default Userprofile