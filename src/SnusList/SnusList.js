import React from 'react'
import { SnusItem } from '../SnusItem/SnusItem'
import './SnusList.css'

export const SnusList = () => {
    return (
        <div className='snus-list'>
            <SnusItem/>
            <SnusItem/>
            <SnusItem/>
            <SnusItem/>
            <SnusItem/>
            <SnusItem/>
        </div>
    )
}