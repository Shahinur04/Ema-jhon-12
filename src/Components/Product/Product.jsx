import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product)
    const {img,name,price,seller,ratings}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>price:${price}</p>
            <p>Manufacture:{seller}</p>
            <p>ratings:{ratings}stars</p>
            </div>
            <button className='btn-cart'>Add-to-Card</button>
        </div>
    );
};

export default Product;