import React, { useEffect, useState } from 'react';
import './BrandProducts.css'
import { Row } from 'reactstrap'
import Footer from '../../../Footer/Footer';
import useBrandProducts from '../../../../hooks/useBrandProducts';
import BrandProductCard from '../../../BrandProductCard/BrandProductCard';

const BrandProducts = () => {
    const [products] = useBrandProducts()

    return (
        <>
            <div className='mx-auto my-3' style={{ width: '80%' }}>
                <div className='productContainer'>
                    <h4 className='text-center'>Products</h4>
                    <div className=' my-4'>
                        <Row xs={1} md={3} lg={4} className="g-5">
                            {
                                products.map(product => <BrandProductCard
                                    key={product._id}
                                    product={product}>
                                </BrandProductCard>)
                            }
                        </Row>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BrandProducts;