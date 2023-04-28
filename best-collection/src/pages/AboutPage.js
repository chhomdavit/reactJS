import { Col, Divider, Row } from 'antd';
import React from 'react';

const AboutPage = () => {
  return (
    <>
    <div className='container'>
      <Divider><h2>ABOUT US</h2></Divider>
    <Row gutter={16}>
      <Col span={12} style={{ marginTop:"30px" }}>
        <img src={require("../assets/logo/logo1.png")}
        alt="img1.jpg"
        width="500px"
        height="250px"
        />
      </Col>
      <Col span={12} style={{ marginTop:"30px" }}>
          <p>Coco Gauff, who shot to fame by reaching the Wimbledon last 16 as a 15-year-old in 2019, is the latest leading WTA Tour player to write a BBC Sport column.

            In her second piece at the Australian Open, the American        seventh seed discusses facing Britain's Emma Raducanu in a        blockbuster second-round match on Wednesday.

            Facing a Grand Slam champion like Emma Raducanu so early in         a major is not ideal, but like my dad always says: 'To be         the best you have to beat the best'.

            To help me follow in Emma's footsteps and win a Slam, I         added a new activity into my pre-season training - boxing.

            My fitness trainer wanted me to box to help improve balance         and so I went down to a gym near where I live in Florida.

            I'm not a fighter - even though I have trained in the past        with Mike Tyson. If someone came up and punched me I would        be out first punch!</p>
      </Col>
      <Col span={24} style={{ margintop:"20px",textAlign:"center" }} >
        <img src={require("../assets/image/img1.jpg")} 
         alt="img1.jpg"
         width="600px"
         height="200px"
        />
      </Col>
      <Col span={24}>
          <p>The pre-season training was in a proper gym where there were professional fighters training and whenever they would come to watch I was talking really loud - like, 'yeah my tennis tournament' - so they knew I wasn't a fighter.

            I didn't want them to think this girl is trash and is going to get whooped! I wanted them to know this is not what I do.

            Some of them knew who I was - and I was wearing my tennis gear to make the point - but I definitely wanted to make sure they knew I wasn't cut out for this.

            They were all very nice people but they were slightly intimidating at first and were watching me. I was like 'guys, I don't do this, I play tennis', I'm the furthest away from this sport that I could be.

            The boxing instructor is a fighter and he said I improved in the three weeks I did with him.

            When he told me I improved I was like 'yes finally' because I looked so bad at the start. So that made me really happy.

            I also got to do it with my brother Codey so it was nice bonding with him. He thinks he's a fighter so I enjoyed trying to beat him up!</p>
      </Col>
    </Row>
    </div>
    <h6 style={{ textAlign:"center",padding:"30px",marginTop:"30px",backgroundColor:"#ff77ff" }}>Copyright Davit-Developer All Right Reservers.</h6>
    </>
  )
}

export default AboutPage;
