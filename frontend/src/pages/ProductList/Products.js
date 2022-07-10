import React from 'react';
import { Row } from 'reactstrap';
import BrandProductCard from '../../components/BrandProductCard/BrandProductCard';
import useBrandProducts from '../../hooks/useBrandProducts';

const Products = () => {
    const [products] = useBrandProducts()
    return (
        <div className='my-4'>
            <Row xs={1} md={3} lg={4} className="g-5">
                {
                    products.slice(0, 8).map(product => <BrandProductCard
                        key={product._id}
                        product={product}>
                    </BrandProductCard>)
                }
            </Row>
        </div>
    );
};

export default Products;