import React from 'react';
import { Select } from 'antd';
import { Slider } from 'antd';
import { Divider } from 'antd';
import './PriceFilter.css'

function handleChange(value) {
    console.log(`selected ${value}`);
}

export const PriceFilter = () => {
    const { Option, OptGroup } = Select;
    return (
        <div className='price-filter aside-item'>
            <div className="price-filter-options">
                <Divider className="price-filter-options__price" orientation="left">ЦЕНА</Divider>
                <div className="price-filter-options-wrapper">
                    <span>Сортировать: </span>
                    <Select className='price-filter-options-select' defaultValue="Выбрать" style={{ width: 200 }} onChange={handleChange}>
                        <OptGroup label="По цене">
                            <Option value="mostPrice">Сначала дорогие</Option>
                            <Option value="smallestPrice">Сначала дешевые</Option>
                        </OptGroup>
                    </Select>
                </div>
            </div>
            <div className="price-filter-slider">
                <span>Выберите отображаемый диапазон цены</span>
                <Slider range={{ draggableTrack: true }} min={100} max={650} defaultValue={[100, 650]} />
            </div>
        </div>
    )
}