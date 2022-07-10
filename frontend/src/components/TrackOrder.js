import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

const TrackOrder = () => {
  return (
    <div className="card mx-auto my-5 p-4 shadow" style={{ width: '30%', borderRadius: 7 }}>
      <h5 style={{ fontWeight: 'bold', paddingBottom: 15 }}>Track Order</h5>

      <div className="d-flex">
        <div style={{ color: 'grey' }}>
          <p style={{ margin: 1 }}>Wed, 12 Sep</p>
          <p>Order ID: 5t36-83j4</p>
        </div>
        <p className="ms-auto" style={{ width: '20%' }}>
          Amt: 345.00
        </p>
      </div>

      <div>
        <p style={{ fontWeight: 'bold', paddingBottom: 15 }}>ETA: 15 Min</p>

        <div className="d-flex">
          <div style={{ width: '100%' }}>
            <div className="d-flex">
              <div className="d-flex">
                <div>
                  <h6 className="px-1" style={{ color: 'green', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </h6>
                  <p clssName='' style={{ fontSize: 5, color: "green", padding: '2px 12px', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </p>
                  <p clssName='' style={{ fontSize: 5, color: "green", padding: '2px 12px', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </p>
                  <p clssName='' style={{ fontSize: 5, color: "green", padding: '2px 12px', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </p>
                  <p clssName='' style={{ fontSize: 5, color: "green", padding: '2px 12px', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </p>


                </div>
                <h3 style={{}} className="px-2">
                  <i className="bi bi-bag" style={{ width: 50 }}></i>
                </h3>
              </div>
              <div>
                <p style={{ margin: 0 }}>Ready To Pickup</p>
                <p>Order #234562 from Tasty Food.</p>
              </div>

              <div>
                <p className="ms-auto py-2" style={{ paddingLeft: 150 }}>
                  11.00
                </p>
              </div>
            </div>

            <div className="d-flex">
              <div className="d-flex">
                <div>
                  <h6 className="px-2" style={{ color: 'green' }}>
                    <i className="bi bi-circle-fill"></i>
                  </h6>
                  <p clssName='' style={{ fontSize: 5, color: "green", padding: '2px 12px', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </p>
                  <p clssName='' style={{ fontSize: 5, color: "green", padding: '2px 12px', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </p>
                  <p clssName='' style={{ fontSize: 5, color: "green", padding: '2px 12px', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </p>
                  <p clssName='' style={{ fontSize: 5, color: "green", padding: '2px 12px', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </p>
                </div>

                <h3 style={{}} className="p-2">
                  {/* <i className="fa-solid fa-user-chef" style={{ width: 50 }}></i> */}
                  <FontAwesomeIcon icon={faUser} />
                </h3>
              </div>
              <div>
                <p style={{ margin: 0 }}>Order Processed</p>
                <p>We are preparing your order.</p>
              </div>

              <div>
                <p className="ms-auto py-2" style={{ paddingLeft: 177 }}>
                  11.00
                </p>
              </div>
            </div>

            <div className="d-flex">
              <div className="d-flex">
                <div>
                  <h6 className="px-2" style={{ color: 'green' }}>
                    <i className="bi bi-circle-fill"></i>
                  </h6>
                  <p clssName='' style={{ fontSize: 5, color: "green", padding: '2px 12px', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </p>
                  <p clssName='' style={{ fontSize: 5, color: "green", padding: '2px 12px', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </p>
                  <p clssName='' style={{ fontSize: 5, color: "green", padding: '2px 12px', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </p>
                  <p clssName='' style={{ fontSize: 5, color: "green", padding: '2px 12px', margin: 0 }}>
                    <i className="bi bi-circle-fill"></i>
                  </p>
                </div>
                <h3 style={{}} className="p-2">
                  {/* <i className="bi bi-bag" style={{ width: 50 }}></i> */}
                  <FontAwesomeIcon icon={faHandHoldingDollar} />
                </h3>
              </div>
              <div>
                <p style={{ margin: 0 }}>Payment Confirmed</p>
                <p>Awaiting Confirmation...</p>
              </div>

              <div>
                <p className="ms-auto py-2" style={{ paddingLeft: 206 }}>
                  11.00
                </p>
              </div>
            </div>

            <div className="d-flex">
              <div className="d-flex" >
                <h6 className="px-2" style={{ color: 'green' }}>
                  <i className="bi bi-circle-fill"></i>
                </h6>

                <h3 style={{}} className="p-2">
                  <i className="bi bi-card-checklist" style={{ width: 50 }}></i>
                </h3>
              </div>
              <div>
                <p style={{ margin: 0 }}>Order Placed</p>
                <p>We have received your order</p>
              </div>

              <div>
                <p className="ms-auto py-2" style={{ paddingLeft: 177 }}>
                  11.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='card my-3 shadow-sm'>
        <div className="d-flex">
          <div>
            <h2><i className="bi bi-house px-2"></i></h2>
          </div>
          <div>
            <p style={{ lineHeight: 1.9, fontWeight: 600, margin: 0 }}>Delivery Address</p>
            <p style={{ margin: 2, color: 'grey' }}>Home, Work and other address</p>
            <p style={{ margin: 2, color: 'grey', fontSize: 15 }}>House no 1314, Second floor, Sector 18,</p>
            <p style={{ margin: 2, color: 'grey', fontSize: 13 }}>Gurugram, Haryana 122022, India, Near: Next to LIC</p>
            <p></p>
          </div>
        </div>
      </div>

      <div className='card shadow-sm'>
        <div className="d-flex">
          <div>
            <h2><i className="bi bi-star px-2"></i></h2>
          </div>
          <div>
            <p style={{ lineHeight: 1.9, fontWeight: 600, margin: 0 }}>Don't Forgate to rate</p>
            <p style={{ margin: 2, color: 'grey' }}>Oh teri! Kitchen to help your fellow fooodies</p>
            <p>
              <i className="bi bi-star px-1"></i>
              <i className="bi bi-star px-1"></i>
              <i className="bi bi-star px-1"></i>
              <i className="bi bi-star px-1"></i>
              <i className="bi bi-star px-1"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
