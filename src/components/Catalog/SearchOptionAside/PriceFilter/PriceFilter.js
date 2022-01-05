import React from 'react';
import { Select } from 'antd';
import { Slider } from 'antd';
import { Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { priceAC } from "../../../../redux/actionCreators/priceAC";
import './PriceFilter.css';

function handleChangeSelect(value) {
    console.log(value);
}

export const PriceFilter = () => {
    const dispatch = useDispatch()

    const {defaultPrice} = useSelector(state => state.priceReducer)
    const {min} = useSelector(state => state.priceReducer)
    const {max} = useSelector(state => state.priceReducer)

    const handleChangeSlider = value => {
        dispatch(priceAC(value))
    }

    const { Option, OptGroup } = Select;
    return (
        <div className='price-filter aside-item'>
            <div className="price-filter-options">
                <Divider className="price-filter-options__price" orientation="left">ЦЕНА</Divider>
                <div className="price-filter-options-wrapper">
                    <span>Сортировать: </span>
                    <Select className='price-filter-options-select'
                    defaultValue="Выбрать"
                    style={{ width: 200 }}
                    onChange={handleChangeSelect}
                    >
                        <OptGroup label="По цене">
                            <Option value="mostPrice">Сначала дорогие</Option>
                            <Option value="smallestPrice">Сначала дешевые</Option>
                        </OptGroup>
                    </Select>
                </div>
            </div>
            <div className="price-filter-slider">
                <span>Выберите желаемый диапазон цены</span>
                <Slider onChange={handleChangeSlider} range={{ draggableTrack: true }} min={min} max={max} defaultValue={defaultPrice} />
            </div>
        </div>
    )
}