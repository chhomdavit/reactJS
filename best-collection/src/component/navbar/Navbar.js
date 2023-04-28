import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined,ContactsOutlined,YuqueOutlined,LoginOutlined,IdcardOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Col, Row,} from 'antd';


  const items = [
    {
      label:(<Link to='/'>Home</Link>),
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label:(<Link to='/contact'>Contact Us</Link>),
      key: 'contact',
      icon: <ContactsOutlined/>,
    },
    {
      label:(<Link to='/about'>About Us</Link>),
      key: 'about',
      icon: <ContactsOutlined/>,
    },
    {
      label:(<Link to='/product'>Prodcut</Link>),
      key: 'product',
      icon: <YuqueOutlined />,
    },
    {
      label:(<Link to='/login'>Login</Link>),
      key: 'login',
      icon: <LoginOutlined />,
    },
    {
      label:(<Link to='/register'>Register</Link>),
      key: 'register',
      icon: <IdcardOutlined />,
    },
    {
      label:(<Link to='/staffpage'>StaffPage</Link>),
      key: 'staffpage',
      icon: <IdcardOutlined />,
    },
    {
      label:(<Link to='/teacherpage'>TeacherPage</Link>),
      key: 'teacherpage',
      icon: <IdcardOutlined />,
    },
  ]
const Navbar = () => {
  const [current, setCurrent] = useState('');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Row>
      <Col xs={12} sm={12} md={24} lg={24}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </Col>
    </Row>
    
  )
}

export default Navbar
