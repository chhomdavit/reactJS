import React from 'react';
import {Row,Col} from "antd";
import { FacebookFilled,YoutubeFilled,WechatFilled,InstagramFilled  } from '@ant-design/icons';

const Footer = () => {
  return (
      <Row >
          <Col xs={24} md={6} >
          <FacebookFilled style={{ fontSize:'35px',color:"blue", padding:"5px", magin:"5px"  }} />
          <h5>www.Facebook.com</h5>
          </Col>
          <Col xs={24} md={6}>
          <YoutubeFilled style={{ fontSize:'35px',color:"red", padding:"5px", magin:"5px"  }} />
          <h5>www.Youtube.com</h5>
          </Col>
          <Col xs={24} md={6}>
          <WechatFilled style={{ fontSize:'35px',color:"green", padding:"5px", magin:"5px"  }} />
          <h5>www.wechat.com</h5>
          </Col>
          <Col xs={24} md={6}>
          <InstagramFilled style={{ fontSize:'35px',color:"#ff4500", padding:"5px", magin:"5px"  }} />
          <h5>www.Instagram.com</h5>
          </Col>
          <h6 style={{ textAlign:"center",padding:"30px",marginTop:"30px"}}>Copyright Davit-Developer All Right Reservers.</h6>
      </Row>
  )
}

export default Footer;
