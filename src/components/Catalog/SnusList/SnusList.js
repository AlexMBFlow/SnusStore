import React from 'react';
import { SnusItem } from './SnusItem/SnusItem';
import { v4 as uuidv4 } from 'uuid';
import './SnusList.css';

<<<<<<< HEAD
export const SnusList = ({ snusItems, value, checkedList}) => {
    const dispatch = useDispatch()
    
=======
export const SnusList = ({ snusItems, value }) => {
>>>>>>> 456a2202e52482c16032cc37259e5a9fe6947ef6
    /* 
    Из стора приходит весь снюсик {snusItems}, и значение из инпута {value},
    на каждый ончейндж инпута используется редусер и изменяется стейт редюсера
    регулярка {regexp} проверяет совпадение {.test} то что написали в инпут со всем имеющимся снюсом {snus.name)}
    */
<<<<<<< HEAD
   
   
    //!!!TODO: переделать стейт менеджемент и запихнуть в редакс useState'ы из ант дизайна в редакс, т.е. пихнуть никотин фильтр в редакс
    let nicotineFilterArray = [];
    let bothArray = [];
    const regexp = new RegExp(value,"gi")
    const inputSearchSnus = snusItems.filter(snus => {
=======
    let regexp = new RegExp(value,"gi")
    const snus = snusItems.filter(snus => {
>>>>>>> 456a2202e52482c16032cc37259e5a9fe6947ef6
        if ( value && value.length > 0) {
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