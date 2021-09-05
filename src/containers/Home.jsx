import React, { memo } from "react";
import { Row, Col } from 'antd';

function Home() {
    return (
    <div>
        <Row gutter={[16, 16]}>
            <Col span={24} md={16}>
                <h2>Mundo</h2>
            </Col>
            <Col span={24} md={16}>
                <h2>Economia</h2>
            </Col>
        </Row>
        <hr />
        <Row gutter={[16, 16]}>
            <Col span={24} md={16}>
                <h2>Tecnologia</h2>
            </Col>
        </Row>
    </div>
    );
};

export default memo (Home)