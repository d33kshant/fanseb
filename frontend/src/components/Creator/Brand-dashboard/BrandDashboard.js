import React, { useEffect, useState } from 'react'
import './BrandDashboard.css'
import rectangular from '../../../assets/BrandDashboard/milagro.png'
import { Row } from 'reactstrap'
import useBrandProducts from '../../../hooks/useBrandProducts'
import BrandProductCard from '../../BrandProductCard/BrandProductCard'

const BrandDashboard = () => {
  const [products] = useBrandProducts()

  const [brand, setBrand] = useState({})
  useEffect(() => {
    // const loadBrand = async () => {
    //   //get brand info by user id
    //   const response = await fetch(`http://localhost:5000/api/product/${id}`)
    //   const data = await response.json()
    //   if (data) {
    //     setBrand(data)
    //   }
    // }
    // loadBrand()
  }, [])


  return (
    <div className='mx-auto my-5' style={{ width: '90%' }}>
      <div className='d-flex flex-column flex-md-row flex-lg-row justify-content-evenly'>
        <div className='brandImg'>
          <img width={'150px'} src={rectangular} alt="" />
        </div>
        <div className='brandInfo'>
          <div className='d-flex flex-column flex-md-row flex-lg-row  justify-content-between'>
            <h3>Milagro Beauty</h3>
            <button className='followBtn'>Follow</button>
          </div>
          <span className='my-4'>0 Followers</span>
          <p>
            Milagro Beauty is one of the most innovative companies in the country by creating products that are chemical free and organic to make your skin feel happy. Started in 2018 with a purpose to introduce products that the Indian customer base was missing out on. All Milagro products are curated keeping in mind the concerns that the world of skin care products are not able to solve yet. A range of skin care products from oils enriched with 24k gold leaves to gel based sunblock, body lotion, face toner along with a range of beauty sponges that are being loved tremendously. Their vision is to always strive for greatness and continue to improve our techniques and solutions to benefit our customers. Products are of highest quality that are safe natural and gives the skin what it actually deserves
          </p>
        </div>
      </div>
      <div className='productContainer'>
        <h4 className='text-center'>Products</h4>
        <div className=' my-4'>
          <Row xs={1} md={3} lg={4} className="g-5">
            {
              products.slice(0, 12).map(product => <BrandProductCard
                key={product._id}
                product={product}>
              </BrandProductCard>)
            }
          </Row>
        </div>

      </div>
    </div>
  )
}

export default BrandDashboard