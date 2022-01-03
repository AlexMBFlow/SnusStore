import React from 'react';
import { PriceFilter } from './PriceFilter/PriceFilter';
import { NicotineFilter } from './NicotineFilter/NicotineFilter';
import { SearchSnus } from './SearchSnus/SearchSnus';
import './SearchOptionAside.css';


export const SearchOptionAside = ({snusItems, value}) => {
    return (
        <div className='search-options-aside'>
            <SearchSnus value={value} snusItems={snusItems}/>
            <PriceFilter/>
            <NicotineFilter/>
        </div>
    )
}