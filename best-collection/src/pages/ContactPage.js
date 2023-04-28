import { PhoneFilled } from '@ant-design/icons'
import { GoogleSquareFilled, ShopFilled } from '@ant-design/icons/lib/icons'
import { Col, Divider, Row } from 'antd'
import React from 'react'

const ContactPage = () => {
  return (
    <>
    <div className='container'>
    <Divider><h2>CONTACT US</h2></Divider>
    <span style={{ textAlign:"center" }}><h4>Get contact update about our latest shop and special offers</h4></span>
    <Row style={{ textAlign:"center",padding:"30px",marginTop:"30px" }}>
      <Col span={8}>
      <PhoneFilled style={{ fontSize:"35px",color:"red" }} />
      <h5>Phon Number</h5>
      <h6>070 66 85 75</h6>
      <h6>078 55 18 09</h6>
      </Col>
      <Col span={8}>
      <ShopFilled style={{ fontSize:"35px",color:"#df00ff" }}/>
      <h5>Location</h5>
      <h6>ផ្ទះលេខ៣២១A​ ផ្លូវលំ ភូមិទ្រា សង្កាត់ស្ទឹងមានជ័យ​ ខណ្ឌមានជ័យ​ រាជាធានីភ្នំពេញ</h6>
      </Col>
      <Col span={8}>
      <GoogleSquareFilled style={{ fontSize:"35px",color:"green" }}/>
      <h5>Email</h5>
      <h6>chhomdavit@gmail.com</h6>
      </Col>
    </Row>
    </div>
    <h6 style={{ textAlign:"center",padding:"30px",marginTop:"30px",backgroundColor:"#ff77ff" }}>Copyright Davit-Developer All Right Reservers.</h6>
    </>
  )
}

export default ContactPage
