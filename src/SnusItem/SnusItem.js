import React from 'react'
import './SnusItem.css'
import { Image } from 'antd';


export const SnusItem = () => {
    return (
        <div className='snus-item'>
            <div className='snus-item-avatar'>
                <Image
                    width={250}
                    src="https://snus-uupx.ru/assets/images/products/620/small/red-banan.jpg"
                />
            </div>
        </div>
    )
}