import React, {useEffect} from 'react';
import { SnusItem } from './SnusItem/SnusItem';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { snusSearchAC } from "../../../redux/actionCreators/setSearchReducerActionCreator"
import './SnusList.css';

export const SnusList = ({ snusItems, value, checkedList}) => {
    const dispatch = useDispatch()
    
    /* 
    Из стора приходит весь снюсик {snusItems}, и значение из инпута {value},
    на каждый ончейндж инпута используется редусер и изменяется стейт редюсера
    регулярка {regexp} проверяет совпадение {.test} то что написали в инпут со всем имеющимся снюсом {snus.name} || {snus.taste}
    */
   
   
    //!!!TODO: переделать стейт менеджемент и запихнуть в редакс useState'ы из ант дизайна в редакс, т.е. пихнуть никотин фильтр в редакс
    let nicotineFilterArray = [];
    let bothArray = [];
    const regexp = new RegExp(value,"gi")
    const inputSearchSnus = snusItems.filter(snus => {
        if ( value && value.length > 0) {
            return regexp.test(snus.name) || regexp.test(snus.taste)
        } else {
            return true
        }
    })

    snusItems.forEach(snus => { //nicotineSearch
        checkedList.forEach(el => {
            if (el === snus.saturation ) {
                nicotineFilterArray.push(snus)
            }      
        })
    }) 

    inputSearchSnus.forEach(el => {
        nicotineFilterArray.forEach(d => {
            if (d.saturation === el.saturation && el.id === d.id) {
                bothArray.push(el)
            }
        })
    })

    useEffect(() => {
        
    })
    return (
        <div className='snus-list'>

            {bothArray.map(snus => (

                <SnusItem snusProps={snus} key={uuidv4()} />

            ))}

        </div>
    )
}