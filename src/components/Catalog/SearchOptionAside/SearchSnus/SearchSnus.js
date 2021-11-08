import React from 'react';
import { Divider } from "antd";
import { AutoComplete } from 'antd';
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import './SearchSnus.css';

const options = [];




export const SearchSnus = () => {
    const { snusItems } = useSelector(state => state.snusReducer); //заполняем строку автокомплита нужными названиями снюсов

    let duplicateArr = [];

    snusItems.forEach( el => duplicateArr.push(el.name))

    if (options.length < 1) {
        let soloItems = new Set(duplicateArr)
    
        for (let value of soloItems) {
            options.push({value: value, key: uuidv4()})
        }
    }

    return (
        <div className='search-snus aside-item'>
            <div className="search-snus-wrap">
                <Divider className="price-filter-options__price" orientation="left">ПОИСК</Divider>
            </div>
            <div className="search-snus-input">
                <AutoComplete
                    style={{
                        width: "100%",
                    }}
                    options={options}
                    placeholder="Введите название снюса"
                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />
            </div>
        </div>
    )
}