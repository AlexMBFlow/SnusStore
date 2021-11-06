import React from 'react'
import './SnusItem.css'
import { Image } from 'antd';
import { Button } from 'antd';

export const SnusItem = () => {
    return (
        <div className='snus-item'>
            <div className='snus-item-inner'>
                <img className='snus-avatar-img'
                    style={{width:250}}
                    src="https://snus-uupx.ru/assets/images/products/620/small/red-banan.jpg"
                    alt='avatar'
                />
                <div class="snus-item__title description-center">Red Ripe Banana</div>
                <div class="snus-item__taste description-center">Мятная ваниль</div>
                <div class="snus-item__info">
                    <div class="snus-item__packs description-center">
                        <span className='gray'>Пакетиков: </span>20 шт</div>
                    <div class="snus-item__packs description-center">
                        <span className='gray'>Никотин:</span> 1000мг
                    </div>
                </div>
                <div class="snus-item__price">666 ₽</div>
                <div class="snus-item__buy">
                    <div class="snus-item__buy-inner">
                        <Button  type="default" shape='round'>
                            В корзину
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}