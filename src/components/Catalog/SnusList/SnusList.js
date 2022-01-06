import React from 'react';
import { SnusItem } from './SnusItem/SnusItem';
import { v4 as uuidv4 } from 'uuid';
import './SnusList.css';
import { useSelector } from 'react-redux';



export const SnusList = () => {
    const { snusItems } = useSelector(state => state.snusReducer);
    const { value } = useSelector(state => state.inputReducer);
    const { defaultCheckedList } = useSelector(state => state.nicotineReducer); //selectedPrice
    const { selectedPrice } = useSelector(state => state.priceReducer);
    const { defaultPrice } = useSelector(state => state.priceReducer);
    //let visibleSnusArray = []

    /* 
    Из стора приходит весь снюсик {snusItems}, и значение из инпута {value},
    на каждый ончейндж инпута используется редусер и изменяется стейт редюсера
    регулярка {regexp} проверяет совпадение {.test} то что написали в инпут со всем имеющимся снюсом {snus.name)}
    */

    const filteredPrice = snusItems.filter(el => {
        if (el.price > selectedPrice[0] && el.price < selectedPrice[1]) {
            return true
        } else {
            return false
        }
    })

    const filteredNicotine = []
    filteredPrice.forEach(el => {
        defaultCheckedList.filter(elem => {
            if (!!defaultCheckedList.length && elem === el.saturation) {
                filteredNicotine.push(el)
                return true
            } else {
                return false
            }
        })
    })
    //console.log(filteredNicotine)
    //console.log(filtedNicotine)

    //visibleSnusArray = [...snusInput]

    const snusInput = snusItems.filter(snus => {
        let regexp = new RegExp(value, "gi")
        if (!!value && value.length > 0) {
            return regexp.test(snus.name)
        } else {
            return true
        }
    })

    return (
        <div className='snus-list'>
            {snusInput.map(snus => (
                <SnusItem snusProps={snus} key={uuidv4()} />
            ))}
        </div>
    )
}