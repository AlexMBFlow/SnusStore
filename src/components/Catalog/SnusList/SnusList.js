import React from 'react';
import { SnusItem } from './SnusItem/SnusItem';
import { useSelector } from "react-redux";
import './SnusList.css';

export const SnusList = () => {
    let counter = 0;
    //const dispatch = useDispatch();
    const {snusItem} = useSelector(state => state.snusReducer);

    //console.log(snusItem)
    return (
        <div className='snus-list'>

            {snusItem.map(snus => (
                
            <SnusItem snusInfo={snus} key={counter++}/>

            ))}

        </div>
    )
}