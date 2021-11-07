import React from 'react';
import './SnusItem.css';
import { Button } from 'antd';

export const SnusItem = () => {
    return (
        <div className='snus-item'>
            <div className='snus-item-inner'>
                <img className='snus-avatar-img'
                    style={{width:250}}
                    src="https://snus-uupx.ru/assets/images/products/620/small/red-banan.jpg"
                    alt='avatar'
                    draggable={false}
                />
                <div className="snus-item__title description-center">Red Ripe Banana</div>
                <div className="snus-item__taste description-center">Мятная ваниль</div>
                <div className="snus-item__info">
                    <div className="snus-item__packs description-center">
                        <span className='gray'>Пакетиков: </span>20 шт</div>
                    <div className="snus-item__packs description-center">
                        <span className='gray'>Никотин:</span> 1000мг
                    </div>
                </div>
                <div className="snus-item__price">666 ₽</div>
                <div className="snus-item__buy">
                    <div className="snus-item__buy-inner">
                        <Button  type="default" shape='round'>
                            Купить
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}