import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import artist from '../../assets/artist.png'
import '../../styles/ProductListPage.css'

const ProductList = () => {
    const { pathname } = useLocation();
    return (
        <div className='mx-auto my-5 productListDiv' style={{ width: '90%' }}>
            <div className='d-flex flex-column flex-md-row flex-lg-row justify-content-evenly'>
                <div className='artistImg'>
                    <img width={'150px'} src={artist} alt="artist" />
                </div>
                <div className='brandInfo'>
                    <div className='d-flex flex-column flex-md-row flex-lg-row  justify-content-between'>
                        <h4>Lavisha Arora</h4>
                        <button className='followBtn'>Follow</button>
                    </div>
                    <span className='my-4'>177 Followers</span><br />
                    <p>🔹 Professional Makeup Artist & Educator</p>

                </div>
            </div>
            <div className='artistNav'>
                <div className='d-flex justify-content-evenly flexBox'>
                    <NavLink to='/dashboard/productList/collections'
                        className={`${pathname === '/dashboard/productList/collections' ? 'active-link' : 'link'}`}>
                        Collections
                    </NavLink>
                    <NavLink to='/dashboard/productList'
                        className={`${pathname === '/dashboard/productList' ? 'active-link' : 'link'}`}>
                        Products
                    </NavLink>
                    <NavLink to='/dashboard/productList/pebbles'
                        className={`${pathname === '/dashboard/productList/pebbles' ? 'active-link' : 'link'}`}>
                        Pebbles
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default ProductList;