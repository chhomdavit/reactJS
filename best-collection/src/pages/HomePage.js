import React from 'react';
import { Row,Col, Divider} from "antd";
import Slider from '../component/Slider';
import Ads from '../component/Ads';
import Categories from '../component/Categories';
import ProductPage from './ProductPage';
import Footer from '../component/Footer';


const HomePage = () => {
  return (
    <>
    <div className='container'>
    <Row gutter={[16 ,16]}>
      <Col sx={3} sm={3} md={6} lg={6}>
        <Ads/>
      </Col>
      <Col sx={8} sm={8} md={18} lg={18}>
        <Slider/>
      </Col>
    </Row>
    <Divider><h2>Product</h2></Divider>
    <Row gutter={[14 ,14]}>
      <Col sx={3} sm={3} md={6} lg={6}>
        <Categories/>
      </Col>
      <Col sx={8} sm={8} md={18} lg={18}>
          <ProductPage/>
      </Col>
    </Row>
    <Row >
      <Col span={24}>
          <Divider><h3>Populer Product</h3></Divider>
          <ProductPage/>
      </Col>
    </Row>
    </div>
    <Row style={{ 
      backgroundColor:"#ff77ff", 
      color:"white",
      textAlign:"center",
      width:"100%",
      height:"200px"}}>
        <Col span={24}>
          <Footer/>
        </Col>     
    </Row>
    </>
  )
}

export default HomePage;
