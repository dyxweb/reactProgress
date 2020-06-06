import React, { Component } from "react";
import './index.css';

export default class CircleProgress extends Component {
  render() {
    const { color, backColor, percent, borderWidth } = this.props;
    let leftRotateAngle = 0; // 左侧旋转的角度
    if (percent <= 50) {
      // 小于50%时旋转-180deg
      leftRotateAngle = 180;
    } else {
      // 大于50%
      leftRotateAngle = (1 - (percent / 100)) * 360;
    }
    let rightRotateAngle = 0; // 右侧旋转的角度

    if (percent === 0) {
      // 0%时旋转-180deg
      rightRotateAngle = 180;
    } else if (percent <= 50) {
      // 小于50%但不为0时
      rightRotateAngle = 180 - (percent / 100) * 360;
    } else {
      // 大于50%时不旋转
      rightRotateAngle = 0;
    }

    // 左侧底部背景的样式
    const leftBackStyle = {
      borderColor: backColor,
      borderWidth: borderWidth,
    }
    // 左侧显示进度的样式
    const leftCoverStyle = {
      borderColor: color,
      transform: `rotate(-${leftRotateAngle}deg)`,
      borderWidth: borderWidth,
    }

    // 右侧底部背景的样式
    const rightBackStyle = {
      borderColor: backColor,
      borderWidth: borderWidth,
    }
    // 右侧显示进度的样式
    const rightCoverStyle = {
      borderColor: color,
      transform: `rotate(-${rightRotateAngle}deg)`,
      borderWidth: borderWidth,
    }
    
    return (
      <div className="dyx-circle-box">
        <div className="dyx-circle-progress-container dyx-circle-left-container dyx-circle-left-back-container">
          <div className="dyx-circle-left-common-progress dyx-circle-left-back-progress" style={leftBackStyle} />
        </div>
        <div className="dyx-circle-progress-container dyx-circle-left-container dyx-circle-left-cover-container">
          <div className="dyx-circle-left-common-progress dyx-circle-left-cover-progress" style={leftCoverStyle} />
        </div>
        <div className="dyx-circle-progress-container dyx-circle-right-container dyx-circle-right-back-container">
          <div className="dyx-circle-right-common-progress dyx-circle-right-back-progress" style={rightBackStyle} />
        </div>
        <div className="dyx-circle-progress-container dyx-circle-right-container dyx-circle-right-cover-container">
          <div className="dyx-circle-right-common-progress dyx-circle-right-cover-progress" style={rightCoverStyle} />
        </div>
      </div>
    )  
  }
}
