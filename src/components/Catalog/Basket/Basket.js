import React, { useState } from 'react';
import { Modal } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { showBasketAC } from "../../../redux/actionCreators/showBasketAC";
import { useDispatch, useSelector } from 'react-redux';
import { BasketItem } from "./BasketItem/BasketItem";
import { v4 as uuidv4 } from 'uuid';
import "./Basket.css";

export const Basket = () => {
    const [onHover, setOnHover] = useState(false)
    const { snusBasket } = useSelector(state => state.basketReducer)
    const dispatch = useDispatch()
    const { isModalVisible } = useSelector(state => state.showBasket)

    const handleOnMouseEnter = () => {
        setOnHover(true)
    }

    const handleOnMouseLeave = () => {
        setOnHover(false)
    }

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
        <div className="catalog-basket">
            <div className="basket-ico" onClick={showModal}>
                <ShoppingCartOutlined
                    className={
                        onHover ? "basket-hover" : ""
                    }
                    style={
                        onHover ? { color: "blue" } : { color: "black" }
                    }
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                />
            </div>

            <Modal okText={"Оформить заказ"} cancelText="Закрыть корзину" title="Корзина" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                {snusBasket.length === 0 ? ""
                    :
                    <div className="basketItem-info">
                        <div className="basketItem-avatar-info">Фото:</div>
                        <div className="basketItem-name-info">Название:</div>
                        <div className="basketItem-taste-info">Вкус:</div>
                        <div className="basketItem-price-info">Цена:</div>
                    </div>

                }
                {snusBasket.length === 0 ?
                    <div className="basket-empty">Корзина пуста &#128546;</div>
                    : snusBasket.map(snusBasket => (
                        <BasketItem snusBasket={snusBasket} key={uuidv4()} />
                    ))
                }
            </Modal>
        </div>
    )
}