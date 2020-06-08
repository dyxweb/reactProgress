import React from "react";
import './index.css';

const SemicircleProgress = props => {
  const { color, backColor, percent, borderWidth, radius } = props;
  const rotateAngle = (1 - (percent / 100)) * 180;

  const boxStyle = {
    height: `${radius}px`
  }
  // 底部背景的样式
  const backStyle = {
    width: `${radius * 2}px`,
    height: `${radius}px`,
    borderColor: backColor,
    borderWidth: borderWidth,
  }

  // 显示进度的样式
  const coverStyle = {
    width: `${radius * 2}px`,
    height: `${radius}px`,
    borderColor: color,
    transform: `rotate(-${rotateAngle}deg)`,
    borderWidth: borderWidth,
  }
  console.log(radius);
  return (
    <div className="dyx-semi-progress-box" style={boxStyle}>
      <div className="dyx-semi-common-progress dyx-semi-back-progress" style={backStyle}  />
      <div className="dyx-semi-common-progress dyx-semi-cover-progress" style={coverStyle} />
    </div>
  )  
}

export default SemicircleProgress;

