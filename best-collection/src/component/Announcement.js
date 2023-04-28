import React from 'react';
import Marquee from 'react-fast-marquee';

const Announcement = () => {
  return (
    <Marquee speed={150} gradient={false} style={{ 
        backgroundColor:"black", 
        color:"gold",
        height:"30px",
        justifyContent:"center",
        fontSize:"16px",
        letterSpacing:"5px",
        wordSpacing:"5px"
        }}>
         THE BEST COLLECTION IS THE FOR YOU 
    </Marquee>
  )
}

export default Announcement;
