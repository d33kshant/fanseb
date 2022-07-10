import React from 'react';
import './BrandProductCard.css'
import wishlist from '../../../../assets/wishlist.png'

const BrandProductCard = ({ product }) => {
    const { img, name, price, brandName } = product
    return (
        <div className='productCard mb-5'>
            <div className='relativeContainer'>
                <div className='cardImgs'>
                    <img src={img} alt="" />
                </div>
                <div id='wishlistIcon'>
                    <img className='w-full' src={wishlist} alt="" />
                </div>
                <p className='brand'>{brandName}</p>
                <div className='productInfo'>
                    <h6 className='pt-3'>{name}</h6>
                    <p className='price'>₹{price}</p>
                </div>
            </div>
        </div>
    );
};

export default BrandProductCard;