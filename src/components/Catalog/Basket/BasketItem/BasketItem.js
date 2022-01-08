import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch} from 'react-redux';
import { basketRemoveAC } from "../../../../redux/actionCreators/basketAC"
import "./BasketItem.css";


export const BasketItem = ({ snusBasket }) => {
    const dispatch = useDispatch()
    const {id} = snusBasket
    const removeItem = () => {
        dispatch(basketRemoveAC(id))
    }

    return (
        <div className='basket-item'>
            <div className="basket-item-inner">
                <div className="basket-item-avatar" style={{ backgroundImage: "url(https://snus-upi.ru/assets/images/products/641/small/66.jpg)" }}></div>
                <div className="basket-item-name">{snusBasket.name}</div>
                <div className="basket-item-taste">{snusBasket.taste}</div>
                <div className="basket-item-price">{snusBasket.price}₽</div>
                <div onClick={removeItem} className='basket-item-remove'><CloseOutlined/></div>
            </div>
        </div>
    )
}