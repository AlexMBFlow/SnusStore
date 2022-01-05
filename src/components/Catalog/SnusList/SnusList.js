import React from 'react';
import { SnusItem } from './SnusItem/SnusItem';
import { v4 as uuidv4 } from 'uuid';
import './SnusList.css';
import { useSelector } from 'react-redux';



export const SnusList = () => {
    const { snusItems } = useSelector(state => state.snusReducer);
    const { value } = useSelector(state => state.inputReducer);
    /* 
    Из стора приходит весь снюсик {snusItems}, и значение из инпута {value},
    на каждый ончейндж инпута используется редусер и изменяется стейт редюсера
    регулярка {regexp} проверяет совпадение {.test} то что написали в инпут со всем имеющимся снюсом {snus.name)}
    */
    const snus = snusItems.filter(snus => {
        let regexp = new RegExp(value, "gi")
        if (!!value && value.length > 0) {
            return regexp.test(snus.name)
        } else {
            return true
        }
    })

    return (
        <div className='snus-list'>
            {snus.map(snus => (
                <SnusItem snusProps={snus} key={uuidv4()} />
            ))}
        </div>
    )
}