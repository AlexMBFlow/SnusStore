import React from 'react';
import { Divider } from "antd";
import { AutoComplete } from 'antd';
import './SearchSnus.css';

const options = [
    {
      value: 'Corvus',
    },
    {
      value: 'RED',
    },
    {
      value: 'Nictech',
    },
  ];

export const SearchSnus = () => {
    return (
        <div className='search-snus aside-item'>
            <div class="search-snus-wrap">
                <Divider className="price-filter-options__price" orientation="left">ПОИСК</Divider>
            </div>
            <div class="search-snus-input">
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