import React from 'react';
import { Modal } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { showBasketAC } from "../../../redux/actionCreators/showBasketAC";
import { useDispatch, useSelector } from 'react-redux';
import { BasketItem } from "./BasketItem/BasketItem";
import "./Basket.css";

export const Basket = () => {
    const {snusBasket} = useSelector(state => state.basketReducer)
    const dispatch = useDispatch()
    const {isModalVisible} = useSelector(state => state.showBasket)

    const showModal = () => {
        dispatch(showBasketAC(true));
    };

    const handleOk = () => {
        dispatch(showBasketAC(false));
    };

    const handleCancel = () => {
        dispatch(showBasketAC(false));
    };

    return (
        <>
            <div onClick={showModal}>
                <ShoppingCartOutlined />
            </div>

            <Modal okText={"Оформить заказ"} cancelText="Закрыть корзину" title="Корзина" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div class="basketItem-info">                
                <div className="basketItem-avatar-info">Фото:</div>
                <div className="basketItem-name-info">Название:</div>
                <div className="basketItem-taste-info">Вкус:</div>
                <div className="basketItem-price-info">Цена:</div>
            </div>
            {snusBasket.map( snusBasket => (
                <BasketItem snusBasket={snusBasket} />
            ) )}
            </Modal>
        </>
    )
}