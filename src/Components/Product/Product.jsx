import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)
    
    const {img,name,price,seller,ratings}=props.product
    const handleToCart=props.handleToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price:${price}</p>
            <p>Manufacture:{seller}</p>
            <p>Ratings:{ratings}stars</p>
            </div>
            <button onClick={()=>handleToCart(props.product)} className='btn-cart'
            >Add-to-Card <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;