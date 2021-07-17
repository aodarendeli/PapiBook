import React from 'react';
import { Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Cardd(image) {
        const imageInfo = image.image
        return (
            <div>
              <Row>
              <Col xs={6} md={3}><img src={image.image.url} width='50' height='50'/></Col>
            <Col xs={6} md={3}>{imageInfo.name}</Col>
            <Col xs={6} md={3}>{imageInfo.size}</Col>
            <Col xs={6} md={3}>{imageInfo.createdDate}</Col>
            </Row>
          </div>
        )
    }

