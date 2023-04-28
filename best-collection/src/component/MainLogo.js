import React from 'react';
import { Col, Row,} from 'antd';
import { Input} from 'antd';
import { Avatar,Badge} from 'antd';
import { Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';


const { Title } = Typography;
// import { SearchOutlined } from '@ant-design/icons';

const MainLogo = () => {
  return (
     
        <Row  style={{
          background:"#e5e4e2",
          display:"flex",
          justifyContent:"space-between",
          textAlign:"center",
          }}>
          <Col xs={24} md={7} lg={7}>
          <img src={require("../assets/logo/logo1.png")} 
              alt="logo1.png"
              width="180px"
              height="100px"
              textAlign="center"
          />
          </Col>
           <Col xs={24} md={7} style={{ marginTop:"35px" }}> 
              <Input.Search
              placeholder='Search....'
              minLength={2}
              // prefix={<SearchOutlined/>}
              allowClear
              textAlign="center"
              justifyContent="center"
              ></Input.Search>
          </Col>
          <Col xs={24} md={7} lg={7}>
            <div style={{ 
              display:"flex", 
              flexDirection:"row",
              justifyContent:"center"}}>
          <div style={{ marginTop:"35px" }}>
              <Avatar src={require("../assets/image/img1.jpg")} 
                      alt="img.jpg"
                      size="large"
              />
              <Title level={5}>Mr.Davit</Title>
          </div>
          <div style={{ marginTop:"35px"}}>
            <Badge count={5}>
              <ShoppingCartOutlined 
                style={{ fontSize: '40px', color: '#08c' }}
              />
            </Badge>
          </div>
          </div>
          </Col>
      </Row> 
  )
}

export default MainLogo;
