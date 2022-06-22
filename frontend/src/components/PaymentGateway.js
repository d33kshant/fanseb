// import React,{ useState } from 'react'
// import axios from 'axios'

// const PaymentGateway = () => {
//   const [msg, setMessage] = useState('')

//   async function displayRazorpay(){ 

//     const res = await handleRazorpay('https://checkout.razorpay.com/v1/checkout.js')

//     if (!res) {
//       alert('Razorpay SDK failed to load. Are you online?')
//       return
//     }

//     const data = await axios.post('http://localhost:5000/payment/create/orderId', {amount:amnt}).then((t) =>t)
//     console.log(data)
//    const options = {
//     "key": "rzp_test_FWaPBQKjitY4pj",
//     "amount": data.amount,
//     "currency": "INR",
//     "name": "Crypto exchange",
//     "description": "Test Transaction",
//     "image": "https://example.com/your_logo",
//     "order_id": data.id,
     
//     handler: async (response) => {
//       try {
//         // const dt = await axios.post('http://localhost:5000/payment/verification', response);
//         //  if(dt === 'success'){
//            setMessage("Transaction successful")
//         //  }
//       } catch (error) { 
//         console.log(error);
//       } 
//     },
// };
// const paymentObject = new window.Razorpay(options);
// paymentObject.open();



// paymentObject.on('payment.failed', function (response){
//         // alert(response.error.code);
//         // alert(response.error.description);
//         // alert(response.error.source);
//         // alert(response.error.step);
//         // alert(response.error.reason);
//         // alert(response.error.metadata.order_id);
//         // alert(response.error.metadata.payment_id);
//         setMessage(response.error.code)
// });
// }

// const handleRazorpay = (src) => {
//   return new Promise((resolve) => {
//     const script = document.createElement('script')
//     script.src = src
//     script.onload = () => {
//       resolve(true)
//     }
//     script.onerror = () => {
//       resolve(false)
//     }
//     document.body.appendChild(script)
//   })
// }

//   return (
//     <div></div>
//   )
// }

// export default PaymentGateway