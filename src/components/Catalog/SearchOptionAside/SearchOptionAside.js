import React from 'react';
import { PriceFilter } from './PriceFilter/PriceFilter';
import { NicotineFilter } from './NicotineFilter/NicotineFilter';
import { SearchSnus } from './SearchSnus/SearchSnus';
import './SearchOptionAside.css';


export const SearchOptionAside = ({snusItems, value,
    onChangeNicotineFilter,onCheckAllChangeNicotineFilter,
    plainOptions, tooltipText, checkedList,
    indeterminate, checkAll}) => {
    return (
        <div className='search-options-aside'>
            <SearchSnus value={value} snusItems={snusItems}/>
            <PriceFilter/>
            <NicotineFilter
            onChangeNicotineFilter={onChangeNicotineFilter}
            onCheckAllChangeNicotineFilter={onCheckAllChangeNicotineFilter}
            plainOptions={plainOptions}
            tooltipText={tooltipText}
            checkedList={checkedList}
            indeterminate={indeterminate}
            checkAll={checkAll}
            />
        </div>
    )
}