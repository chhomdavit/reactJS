import React from 'react'
import {Button, Card, Col, Row} from 'antd';
import { ProductItem } from '../data';
const { Meta } = Card;

const ProductPage = () => {
  return (
    <div className='site-card-wrapper'>
      <Row gutter={[16,16]}>
        {ProductItem.map((item) =>{
          return(
            <Col xs={18} sm={14} md={8} lg={8}>
            <Card
              hoverable
              style={{
                width: 270,
              }}
              cover={<img alt="example" 
              src={item.img} height="200px" />}>
              <Meta
                title={item.title}
                description={[
                  <div>
                    <p>{item.desc}</p>
                  </div>
                ]} />
              <div>
                <Button htmlType='submit' icon='' className='custom-default-fill-btn'>
                  Shop Now
                </Button>&nbsp;&nbsp;
                <Button htmlType='submit' icon='' className='custom-default-fill-btn'>
                  Add to Card
                </Button>
              </div>
            </Card>
          </Col>
          )
        })}
      </Row>
    </div> 
  )
}

export default ProductPage
