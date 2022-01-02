import React from 'react';
import './SnusItem.css';
import { Button, message } from 'antd';

export const SnusItem = ({snusProps}) => {
    const success = () => {
        message.success('Добавлено в корзину', 0.85);
      };
      //console.log("PROPS", snusInfo)
    return (
        <div className='snus-item'>
            <div className='snus-item-inner'>
                <img className='snus-avatar-img'
                    style={{width:250}}
                    src={snusProps.avatar}
                    alt={snusProps.name}
                    draggable={false}
                />
                <div className="snus-item__title description-center">{snusProps.name}</div>
                <div className="snus-item__taste description-center">{snusProps.taste}</div>
                <div className="snus-item__info">
                    <div className="snus-item__packs description-center">
                        <span className='gray'>Пакетиков: </span>{snusProps.packs} шт</div>
                    <div className="snus-item__packs description-center">
                        <span className='gray'>Никотин:</span> {snusProps.nicotine}мг
                    </div>
                </div>
                <div className="snus-item__price">{snusProps.price} ₽</div>
                <div className="snus-item__buy">
                    <div className="snus-item__buy-inner">
                        <Button onClick={success} type="default" shape='round'>
                            Купить
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}