import React from 'react';
import { Checkbox, Divider } from "antd";
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './NicotineFilter.css';

const CheckboxGroup = Checkbox.Group;

export const NicotineFilter = ({onChangeNicotineFilter,onCheckAllChangeNicotineFilter,
    plainOptions, tooltipText, checkedList,
    indeterminate, checkAll}) => {
    
    return (
        <div className='nicotine-filter aside-item'>
            <Divider className='nicotine-filter__power ' orientation="left">КРЕПОСТЬ <Tooltip placement="rightBottom" color={"#108ee9"} title={tooltipText}><QuestionCircleOutlined /></Tooltip> </Divider>
            <div className="nicotine-filter-checkbox">
                <div className="nicotine-checkbox-list">
                    <CheckboxGroup style={{ flex: '0 1 auto' }}
                        options={plainOptions}
                        value={checkedList}
                        onChange={onChangeNicotineFilter}
                    />
                </div>
                <Checkbox
                    indeterminate={indeterminate}
                    onChange={onCheckAllChangeNicotineFilter}
                    checked={checkAll}
                    style={{ paddingTop: "0.7rem" }}>

                    <span>Выбрать всё</span>
                </Checkbox>
            </div>
        </div>
    )
}