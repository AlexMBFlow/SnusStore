import React, { useState } from 'react';
import { Checkbox, Divider } from "antd";
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './NicotineFilter.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkedListAC } from "../../../../redux/actionCreators/checkedListAC"

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Легкий", "Средний", "Крепкий", "Очень крепкий"];
const defaultCheckedList = ["Средний", "Крепкий", "Очень крепкий"];


export const NicotineFilter = () => {
    const dispatch = useDispatch()
    const tooltipText = '0-20мг легкий, 20-40мг средний, 40-60мг крепкий, 60+мг очень крепкий';

    const {checkedList} = useSelector(state => state.nicotineReducer)
    //debugger
    const {indeterminate} = useSelector(state => state.nicotineReducer)
    const {checkAll} = useSelector(state => state.nicotineReducer)

    const [checkedList1, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate1, setIndeterminate] = useState(true);
    const [checkAll1, setCheckAll] = useState(false);
    //debugger
    const onChange = (list) => {
        //setCheckedList(list);
        dispatch(checkedListAC(list))
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <div className='nicotine-filter aside-item'>
            <Divider className='nicotine-filter__power ' orientation="left">КРЕПОСТЬ <Tooltip placement="rightBottom" color={"#108ee9"} title={tooltipText}><QuestionCircleOutlined /></Tooltip> </Divider>
            <div className="nicotine-filter-checkbox">
                <div className="nicotine-checkbox-list">
                    <CheckboxGroup style={{ flex: '0 1 auto' }}
                        options={plainOptions}
                        value={checkedList}
                        onChange={onChange}
                    />
                </div>
                <Checkbox
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                    checked={checkAll}
                    style={{ paddingTop: "0.7rem" }}>

                    <span>Выбрать всё</span>
                </Checkbox>
            </div>
        </div>
    )
}