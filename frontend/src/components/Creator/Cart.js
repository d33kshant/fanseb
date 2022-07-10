import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Cart = () => {

  const [msg, setMessage] = useState('')
  const amnt = 300;
  const navigate = useNavigate()

  async function displayRazorpay() {

    const res = await handleRazorpay('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }

    const data = await axios.post('http://localhost:5000/payment/create/orderId', { amount: amnt }).then((t) => t)
    console.log(data)
    const options = {
      "key": "rzp_test_FWaPBQKjitY4pj",
      "amount": 9032,
      "currency": "INR",
      "name": "Crypto exchange",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": data.id,

      handler: async (response) => {
        console.log('response');
        console.log(response);
        try {
          const dt = await axios.post('http://localhost:5000/payment/verifyPayment', response);
          if (dt === 'success') {
            setMessage("Transaction successful")
          }
        } catch (error) {
          console.log(error);
        }
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    navigate('/order-status')




    paymentObject.on('payment.failed', function (response) {
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
      setMessage(response.error.code)
    });
  }

  const handleRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
  return (
    <div>
      <div className="m-auto mt-5 shadow" style={{ width: '70%' }}>
        <div className="card-body">
          <h5 className="card-title p-2">Shopping Cart</h5>
          <h6 className="card-subtitle mb-2 text-muted p-3">
            Homepage / Clothing Categories / My Shopping Cart
          </h6>

          <div className="d-flex">
            <div style={{ width: '60%' }}>
              {/* ------------------------------------------------------------ */}
              <div className=" mx-5 my-3 shadow" style={{ borderRadius: 7 }}>
                <div className="d-flex">
                  <div className="m-3">
                    <p
                      style={{
                        border: '1px solid grey',
                        borderRadius: '50%',
                        height: 40,
                        width: 40,
                      }}
                      className="m-2 text-center"
                    >
                      a
                    </p>
                  </div>
                  <div>
                    <p>
                      LOGIN{' '}
                      <h3 style={{ display: 'inline' }}>
                        <i className="bi bi-check-lg"></i>
                      </h3>
                    </p>
                    <h5>Michael Smith &nbsp; +806-445-4453</h5>
                  </div>
                  <div className="ms-auto p-4" style={{ border: 'none' }}>
                    {/* <button>Change</button> */}
                    <p>Change</p>
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------------------------- */}
              <div className=" mx-5 my-3 shadow" style={{ borderRadius: 7 }}>
                <div className="d-flex">
                  <div
                    className="m-3"
                    style={{
                      border: '1px solid back',
                      borderRadius: '50%',
                      backgroundColor: 'black',
                      color: 'white',
                      height: 40,
                      width: 40,
                    }}
                  >
                    <p className="text-center m-2">b</p>
                  </div>
                  <div className="m-3">SHIPPING ADDRESS</div>
                </div>
              </div>

              {/* ----------------------------------------------------------- */}
              <div className=" mx-5 my-1" style={{ borderRadius: 7 }}>
                <div
                  className="p-5"
                  style={{
                    background: 'rgb(255,255,255)',
                    background:
                      'linear-gradient(55deg, rgba(255,255,255,1) 0%, rgba(245,247,226,1) 19%, rgba(255,255,255,1) 39%, rgba(245,228,243,1) 58%, rgba(244,238,243,1) 79%, rgba(255,255,255,1) 100%)',
                  }}
                >
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        First Name*
                      </label>
                      <input
                        type="text"
                        className="form-control shadow p-3"
                        style={{
                          backgroundColor: 'white',
                          border: 'none',
                          borderRadius: 7,
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputPassword4" className="form-label">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        className="form-control shadow p-3"
                        style={{
                          backgroundColor: 'white',
                          border: 'none',
                          borderRadius: 7,
                        }}
                      />
                    </div>

                    <div className="col-md-9">
                      <label className="form-label">Address*</label>
                      <input
                        type="text"
                        className="form-control shadow p-3"
                        style={{
                          backgroundColor: 'white',
                          border: 'none',
                          borderRadius: 7,
                        }}
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Apt. Suite*</label>
                      <input
                        type="text"
                        className="form-control shadow p-3"
                        style={{
                          backgroundColor: 'white',
                          border: 'none',
                          borderRadius: 7,
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control shadow p-3"
                        style={{
                          backgroundColor: 'white',
                          border: 'none',
                          borderRadius: 7,
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputState" className="form-label">
                        Country
                      </label>
                      <select
                        id="inputState"
                        className="form-select shadow p-3"
                        style={{
                          backgroundColor: 'white',
                          border: 'none',
                          borderRadius: 7,
                        }}
                      >
                        <option selected>Choose...</option>
                        <option>India</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Postal code *</label>
                      <input
                        type="number"
                        className="form-control shadow p-3"
                        style={{
                          backgroundColor: 'white',
                          border: 'none',
                          borderRadius: 7,
                        }}
                      />
                    </div>

                    <div>
                      <label className="form-label">Address Type</label>
                      <div className="d-flex">
                        <div
                          className="form-check mx-5"
                          style={{ color: 'black' }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios1"
                            value="option1"
                            style={{ borderRadius: 7 }}
                          />
                          <label className="form-check-label" htmlFor="gridRadios1">
                            Home (All Day Delivery)
                          </label>
                        </div>

                        <div className="form-check mx-5">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                            checked
                          />
                          <label className="form-check-label" htmlFor="gridRadios2">
                            Office (Delivery Between 10AM-5PM)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 d-flex">
                      <button type="submit" className="btn btn-dark mx-5">
                        Save And Deliver Here
                      </button>

                      <p className="mx-5">Cancel</p>
                    </div>
                  </form>
                </div>
              </div>

              {/* --------------------------------------------------------------- */}
              <div onClick={displayRazorpay}
                className="card  mx-5 my-3 shadow"
                style={{ borderRadius: 7 }}
              >
                <div className="d-flex">
                  <div
                    className="m-3"
                    style={{
                      borderRadius: '50%',
                      height: 40,
                      width: 40,
                    }}
                  >
                    <p className="text-center m-2">C</p>
                  </div>
                  <div className="mx-2 my-4">PAYMENT METHOD</div>
                </div>
              </div>

            </div>

            <div className="" style={{ width: '40%' }}>
              <div className="mx-3 my-3 shadow" style={{ borderRadius: 7 }}>
                <div className="p-3 mx-5">
                  <p className="p-2">Your Order</p>
                  <hr style={{ opacity: 0.1, padding: '1px 5px' }} />
                </div>

                <div className="d-flex p-3 mx-3">
                  <div className="" style={{ width: '50%' }}>
                    <img
                      src="cloth1.jpg"
                      className=""
                      style={{ width: '80%', height: 130 }}
                    />
                  </div>
                  <div style={{ width: '60%' }}>
                    <p style={{ fontWeight: 'bold' }}>Jeans with sequins</p>

                    <div className="d-flex">
                      <div
                        className="d-flex px-1"
                        style={{ alignItems: 'center' }}
                      >
                        <p>Size: </p>
                        <p style={{ fontWeight: 600, padding: 5 }}> XL</p>
                      </div>
                      <div
                        className="d-flex px-3"
                        style={{ alignItems: 'center' }}
                      >
                        <p>Colour: </p>
                        <p style={{ fontWeight: 600, padding: 5 }}> Blue</p>
                      </div>
                    </div>

                    <div className="d-flex">
                      <p style={{ fontWeight: 'bold' }}>$39.00 </p>
                      <p style={{ color: 'grey', paddingLeft: 5 }}> x2</p>
                    </div>
                  </div>
                </div>

                <hr className="" style={{ opacity: 0.1, margin: '15px 5px' }} />

                <div className="d-flex p-3 mx-3">
                  <div className="" style={{ width: '50%' }}>
                    <img
                      src="cloth2.jpeg"
                      className=""
                      style={{ width: '80%', height: 130 }}
                    />
                  </div>
                  <div style={{ width: '60%' }}>
                    <p style={{ fontWeight: 'bold' }}>Jeans with sequins</p>

                    <div className="d-flex">
                      <div
                        className="d-flex px-1"
                        style={{ alignItems: 'center' }}
                      >
                        <p>Size: </p>
                        <p style={{ fontWeight: 600, padding: 5 }}> XL</p>
                      </div>
                      <div
                        className="d-flex px-3"
                        style={{ alignItems: 'center' }}
                      >
                        <p>Colour: </p>
                        <p style={{ fontWeight: 600, padding: 5 }}> Blue</p>
                      </div>
                    </div>

                    <div className="d-flex">
                      <p style={{ fontWeight: 'bold' }}>$39.00 </p>
                      <p style={{ color: 'grey', paddingLeft: 5 }}> x2</p>
                    </div>
                  </div>

                </div>
                <hr style={{ opacity: 0.1, margin: '5px 5px' }} />


                <div className="d-flex mx-4 p-3">
                  <p className='pl-2' style={{ marginLeft: '5%' }}>Delivery&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <p className='pl-5'>$20 (Express)</p>
                </div>

                <div className="d-flex mx-4 px-3">
                  <p className='pl-2' style={{ marginLeft: '5%' }}>Discount&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <p className='pl-5'>-$10</p>
                </div>

                <hr style={{ opacity: 0.1, margin: '5px 5px' }} />


                <div className="d-flex mx-4 px-3">
                  <p className='pl-2' style={{ marginLeft: '5%', fontWeight: 'bold', fontSize: 30 }}>Total&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;</p>
                  <p className='' style={{ fontWeight: 'bold', fontSize: 30 }}>$1117,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
