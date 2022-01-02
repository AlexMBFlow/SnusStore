import React from 'react';
import { Row, Col } from 'antd';
import { SnusList } from './SnusList/SnusList';
import { SearchOptionTop}  from './SearchOptionTop/SearchOptionTop';
import { SearchOptionAside } from './SearchOptionAside/SearchOptionAside';
import { useSelector } from "react-redux";
import "./Catalog.css";

export const Catalog = ({onChangeNicotineFilter,onCheckAllChangeNicotineFilter,
    plainOptions, tooltipText, checkedList,
    indeterminate, checkAll}) => {

    const { snusItems } = useSelector(state => state.snusReducer);
    //inputReducer
    const { value } = useSelector(state => state.inputReducer);

    return (
        <>
            <Row className='catalog-wrapper'>
                <Col span={18} push={5}>
                    <SearchOptionTop/>
                    <SnusList
                    value={value}
                    snusItems={snusItems}
                    checkedList={checkedList}
                    />
                </Col>

                <Col span={5} pull={18}>
                    <SearchOptionAside
                    value={value}
                    snusItems={snusItems}
                    onChangeNicotineFilter={onChangeNicotineFilter}
                    onCheckAllChangeNicotineFilter={onCheckAllChangeNicotineFilter}
                    plainOptions={plainOptions}
                    tooltipText={tooltipText}
                    checkedList={checkedList}
                    indeterminate={indeterminate}
                    checkAll={checkAll}
                    />
                </Col>
            </Row>
        </>
    )
}