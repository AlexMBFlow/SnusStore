import React from 'react';
import "./BasketItem.css"
//import { useSelector } from 'react-redux';


export const BasketItem = ({ snusBasket }) => {

    return (  
        <div className='basketItem'>
            <div className="basketItem-inner">
                <div className="basketItem-avatar" style={{ backgroundImage: "url(https://snus-upi.ru/assets/images/products/641/small/66.jpg)" }}></div>
                <div className="basketItem-name">{snusBasket.name}</div>
                <div className="basketItem-taste">{snusBasket.taste}</div>
                <div className="basketItem-price">{snusBasket.price}</div>
            </div>
        </div>
    )
}