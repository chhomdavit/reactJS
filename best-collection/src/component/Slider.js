import React from 'react';
import { Carousel } from 'antd';
import { Typography } from 'antd';
import { Button, Space } from 'antd';
import { Col,Row } from 'antd';
const { Title } = Typography;


const Slider = () => {
  return (
    <div style={{
       width:"100%", 
       padding:"10px",
    }}>
        <Carousel autoplay draggable>
          <div>
          <Row style={{ backgroundColor:"#f5f5f5",borderRadius:"5px",           padding:'5px'  }}>
            <Col sx={3} sm={6} md={12}>
            <img 
              src={require("../assets/image/img2.jpg")} 
              alt="img2.jpg"
              width="400px"
              height="250px"
              />
            </Col>
            <Col sx={3} sm={3} md={12}  style={{ margin:"auto",textAlign:"center" }}>
              <Title level={3}>Adidas</Title>
              <Title level={5}>We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are</Title>
              <Space wrap>
                <Button>Shop Now</Button>
                <Button>Add to Card</Button>
              </Space> 
            </Col>
          </Row>
          </div>
          <div>
          <Row style={{ backgroundColor:"#f5f5f5",borderRadius:"5px",           padding:'5px'  }}>
            <Col sx={3} sm={6} md={12}>
            <img 
              src={require("../assets/image/img3.jpg")} 
              alt="img2.jpg"
              width="400px"
              height="250px"
              />
            </Col>
            <Col sx={3} sm={3} md={12}  style={{ margin:"auto",textAlign:"center" }}>
              <Title level={3} style={{  }}>Adidas</Title>
              <Title level={5}>We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are</Title>
              <Space wrap>
                <Button>Shop Now</Button>
                <Button>Add to Card</Button>
              </Space> 
            </Col>
          </Row>
          </div>
          <div>
          <Row style={{ backgroundColor:"#f5f5f5",borderRadius:"5px",           padding:'5px'  }}>
            <Col sx={3} sm={6} md={12}>
            <img 
              src={require("../assets/image/img4.jpg")} 
              alt="img2.jpg"
              width="400px"
              height="250px"
              />
            </Col>
            <Col sx={3} sm={3} md={12}  style={{ margin:"auto",textAlign:"center" }}>
              <Title level={3}>Adidas</Title>
              <Title level={5}>We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are</Title>
              <Space wrap>
                <Button>Shop Now</Button>
                <Button>Add to Card</Button>
              </Space> 
            </Col>
          </Row>
          </div>
          <div>
          <Row style={{ backgroundColor:"#f5f5f5",borderRadius:"5px",           padding:'5px'  }}>
            <Col sx={3} sm={6} md={12}>
            <img 
              src={require("../assets/image/img7.jpg")} 
              alt="img2.jpg"
              width="400px"
              height="250px"
              />
            </Col>
            <Col sx={3} sm={3} md={12}  style={{ margin:"auto",textAlign:"center" }}>
              <Title level={3}>Adidas</Title>
              <Title level={5}>We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are</Title>
              <Space wrap>
                <Button>Shop Now</Button>
                <Button>Add to Card</Button>
              </Space> 
            </Col>
          </Row>
          </div>
        </Carousel>
    </div>
  );
}

export default Slider;
