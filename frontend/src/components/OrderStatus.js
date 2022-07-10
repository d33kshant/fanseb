import React from 'react';
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const OrderStatus = () => {

  const navigate = useNavigate()
  return (
    <div
      className="card mx-auto my-5"
      style={{ width: '40%', border: '1px solid grey', borderRadius: 5, backgroundColor: 'white' }}
    >
      <div className="p-5">
        <h5>
          HOME&nbsp;&nbsp;>&nbsp;&nbsp;ORDERS&nbsp;&nbsp;>&nbsp;&nbsp;ID
          334902461
        </h5>

        <div className="py-3 d-flex">
          <div>
            <h1>Order ID: 334902461</h1>
          </div>

          <div className="d-flex ms-auto">
            <button
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: 45,
                border: '1px solid grey',
              }}
              className="mx-3"
            >
              <i className="bi bi-receipt"></i>Invoice
            </button>

            <Link to='/track-order'><button
              className="btn btn-primary"
              style={{ borderRadius: 10, height: 45 }}
            >
              Track Order <i className="bi bi-bullseye"></i>
            </button>
            </Link>
          </div>
        </div>

        <div className="d-flex">
          <div className="d-flex">
            <p style={{ color: 'grey' }}>Order Date:&nbsp;</p>
            <h6 style={{ lineHeight: '1.5' }}>Feb 16, 2022</h6>
            <p style={{ color: 'grey', fontWeight: 'bold' }}>
              &nbsp;&nbsp;|&nbsp;&nbsp;
            </p>

            <p style={{ color: '#32cd32', fontWeight: 'bold' }}>
              Estimated Delivery: May14, 2022
            </p>
          </div>
        </div>
        <hr />
        {/* ------------------------------------------------------------ */}

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ padding: 10 }}
        >
          <div
            style={{
              width: '20%',
              backgroundColor: '	#E0E0E0',
              borderRadius: 7,
            }}
          >
            <img
              src="macbook.jpeg"
              style={{ width: '80%', margin: 15, borderRadius: 7 }}
            />
          </div>
          <div style={{ width: '40%', marginLeft: 60 }}>
            <h5>MacBook Pro 14"</h5>
            <p style={{ color: 'grey' }}>
              Space grey&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 32GB
              &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; 1TB{' '}
            </p>
          </div>
          <div className="ms-auto" style={{ width: '15%' }}>
            <p style={{ fontWeight: 'bold' }}>$2599.00</p>
            <p style={{ color: 'grey' }}>Qty:&nbsp;1</p>
          </div>
        </div>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ padding: 10 }}
        >
          <div
            style={{
              width: '20%',
              backgroundColor: '	#E0E0E0',
              borderRadius: 7,
            }}
          >
            <img
              src="macbook.jpeg"
              style={{ width: '80%', margin: 15, borderRadius: 7 }}
            />
          </div>
          <div style={{ width: '40%', marginLeft: 60 }}>
            <h5>MacBook Pro 14"</h5>
            <p style={{ color: 'grey' }}>
              Space grey&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 32GB
              &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; 1TB{' '}
            </p>
          </div>
          <div className="ms-auto" style={{ width: '15%' }}>
            <p style={{ fontWeight: 'bold' }}>$2599.00</p>
            <p style={{ color: 'grey' }}>Qty:&nbsp;1</p>
          </div>
        </div>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ padding: 10 }}
        >
          <div
            style={{
              width: '20%',
              backgroundColor: '	#E0E0E0',
              borderRadius: 7,
            }}
          >
            <img
              src="macbook.jpeg"
              style={{ width: '80%', margin: 15, borderRadius: 7 }}
            />
          </div>
          <div style={{ width: '40%', marginLeft: 60 }}>
            <h5>MacBook Pro 14"</h5>
            <p style={{ color: 'grey' }}>
              Space grey&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 32GB
              &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; 1TB{' '}
            </p>
          </div>
          <div className="ms-auto" style={{ width: '15%' }}>
            <p style={{ fontWeight: 'bold' }}>$2599.00</p>
            <p style={{ color: 'grey' }}>Qty:&nbsp;1</p>
          </div>
        </div>

        <hr />

        <div className="d-flex">
          <div style={{ width: '20%' }}>
            <p style={{ fontWeight: 'bold', fontSize: 22 }}>Payment</p>
            <p style={{ color: 'grey' }}>Visa **56</p>
          </div>
          <div className="ms-auto" style={{ width: '50%' }}>
            <p style={{ fontWeight: 'bold', fontSize: 22 }}>Delivery</p>
            <p style={{ color: 'grey' }}>Address:</p>
            <p style={{ fontSize: 20, margin: 1 }}>
              847 Jewess Bridge Apt. 174
            </p>
            <p style={{ fontSize: 20, margin: 1 }}>London, UK</p>
            <p style={{ fontSize: 20 }}>474-769-3919</p>

            <p style={{ color: 'grey', marginBottom: 1 }}>Delivery method:</p>
            <p style={{ fontSize: 20, margin: 1 }}>Free (30 days)</p>
          </div>
        </div>

        <hr />

        <div className="d-flex">
          <div style={{ width: '25%' }}>
            <p style={{ fontWeight: 'bold', fontSize: 22 }}>Need help?</p>
            <p style={{ color: 'grey' }}>
              <i className="bi bi-question-square-fill"></i>&nbsp;&nbsp;&nbsp;Order Issues
              &nbsp;&nbsp;<i className="bi bi-arrow-up-right"></i>
            </p>
            <p style={{ color: 'grey' }}>
              <i className="bi bi-truck" style={{ color: 'grey' }}></i>&nbsp;&nbsp;&nbsp;Delivery Info
              &nbsp;&nbsp;<i className="bi bi-arrow-up-right"></i>
            </p>{' '}
            <p style={{ color: 'grey' }}>
              <i className="bi bi-arrow-left-square-fill"></i>&nbsp;&nbsp;&nbsp;Returns
              &nbsp;&nbsp;<i className="bi bi-arrow-up-right"></i>
            </p>
          </div>
          <div className="ms-auto" style={{ width: '50%' }}>
            <p style={{ fontWeight: 'bold', fontSize: 22 }}>Order Summary</p>

            <div className='d-flex' style={{ fontSize: 20 }}>
              <p>Subtotal</p>
              <p className='ms-auto px-3'>$5547</p>
            </div>

            <div className='d-flex'>
              <p>Discount</p>
              <p className='ms-auto px-3'>(20%)-1109.40</p>
            </div>

            <div className='d-flex'>
              <p>Delivery</p>
              <p className='ms-auto px-3'>$0.00</p>
            </div>

            <div className='d-flex'>
              <p>Tax</p>
              <p className='ms-auto px-3'>+$221.88</p>
            </div>
            <p>-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;-&nbsp;</p>
            <div className='d-flex'>
              <p>Total</p>
              <p className='ms-auto px-3'>$4659.48</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default OrderStatus;
