import React from 'react';
import { SnusItem } from './SnusItem/SnusItem';
import { v4 as uuidv4 } from 'uuid';
import './SnusList.css';

export const SnusList = ({ snusItems, value }) => {
    /* 
    Из стора приходит весь снюсик {snusItems}, и значение из инпута {value},
    на каждый ончейндж инпута используется редусер и изменяется стейт редюсера
    регулярка {regexp} проверяет совпадение {.test} то что написали в инпут со всем имеющимся снюсом {snus.name)}
    */
    let regexp = new RegExp(value,"gi")
    const snus = snusItems.filter(snus => {
        if ( value && value.length > 2) {
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