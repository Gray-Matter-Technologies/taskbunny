import React from "react";
import img1 from "./images/layer_1.png"
import styled from "styled-components";

const BannerBox = styled.div`
@media screen and (min-width: 768px) {
  .clear:after{
      content: "";
      display: block;
      height: 0;
      clear:both;
      visibility: hidden;
  }
  .clear{
      *zoom: 1;
  }
  .box {
      background:#fff;
      margin-left:73px;
      margin-right:73px;
  }

  .left-box{
    position: absolute;
    width:30%;
    margin-top:20%;
  }
  .left-box h1{
    width:100%;
    line-height:80px;
    font-weight:bold;
    font-size:30px;
    color:#000;
  }
  .left-box p{
    line-height:30px;
    color:#000;
    font-size:18px;
  }

  .right-box{
    float:right
    position: relative;
    width:100%;
  }
  .right-box img{
    width:100%;
    height:auto;
  }
}

@media screen and (max-width: 767px) {
  .box {
      background:#fff;
      flex-direction:column;
      padding-left:30px;
      padding-right:30px;
  }
    .left-box{
      width:100%;
      margin-top:40px;
    }
    .left-box h1{
      width:100%;
      text-align:center;
      line-height:35px;
      font-weight:bold;
      font-size:30px;
      color:#000;
      margin-bottom:25px;
    }
    .left-box p{
      text-align:center;
      line-height:18px;
      color:#000;
      font-size:12px;
    }
    .right-box{
      width:100%;
    }
    .right-box img{
      width:100%;
      height:auto;
    }

  }
}
`
const Banner = () => {
  
  return (
    <BannerBox>
    <div className="clear box">
        <div className="left-box">
          <h1>Connect with experts to get the job done on TaskBunny</h1>
          <p>It’s amazing what you can’t do yourself</p>
        </div>
        <div className="right-box">
          <img src={img1}/>
        </div>
    </div>
    </BannerBox>
  );
};

export default Banner;