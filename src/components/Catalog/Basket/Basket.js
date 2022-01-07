import React from 'react';
import { Modal } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { showBasketAC } from "../../../redux/actionCreators/showBasketAC";
import { useDispatch, useSelector } from 'react-redux';
import "./Basket.css";


export const Basket = () => {
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

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}