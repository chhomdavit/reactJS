import React from 'react'

const Ads = () => {
  return (
    <div style={{ 
        width:"100%",
        height:"260px",
        padding:"10px",
        backgroundColor:"#f5f5f5",
        borderRadius:"5px",
        marginTop:'10px',
        textAlign:"center",
        fontFamily:"monospace"
        }}>
      <img src={require("../assets/image/img6.gif")}
       alt="img6.gif"
      />
      <h5 style={{ color:"#ff4040",marginTop:"5px"}}>ប្រមូលសិនក្នុងថ្ងៃចូលឆ្នាំ​ បញ្ជុះ​25%</h5>
    </div>
  )
}

export default Ads
