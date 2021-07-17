import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
export function NameFilter(image) {
        const imageInfo = image.image
        
        return (
            <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img  src={image.image.url} width='286' height='190'/>
  <Card.Body>
    <Card.Title>İsimler:  {imageInfo.name}</Card.Title>
    <Card.Text>
    Tarih: {imageInfo.createdDate}<br></br>
    Boyut: {imageInfo.size}
    </Card.Text>
   
  </Card.Body>
  </Card>

          </div>
        )

        
    }
