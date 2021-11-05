import React from 'react';
import { Row, Col } from 'antd';
import { SnusList } from '../SnusList/SnusList';
import {SearchOptionTop} from './SearchOptionTop/SearchOptionTop'
import "./Catalog.css"

export const Catalog = () => {
    return (
        <>
            <Row className='catalog-wrapper'>
                <Col span={18} push={5}>
                    <SearchOptionTop/>
                    <SnusList/>
                </Col>
                
                <Col span={5} pull={18}>
                    параметры поиска
                </Col>
            </Row>
        </>
    )
}