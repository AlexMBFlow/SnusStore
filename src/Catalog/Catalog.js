import React from 'react';
import { Row, Col } from 'antd';
import { SnusList } from '../SnusList/SnusList';

export const Catalog = () => {
    return (
        <div>
            <Row>
                <Col span={18} push={6}>
                    <SnusList/>
                </Col>
                
                <Col span={6} pull={18}>
                    параметры поиска
                </Col>
            </Row>
        </div>
    )
}