import React from "react";
import './index.css';

const LineProgress = props => {
  const { color, backColor, percent, borderWidth } = props;
  // 底部背景的样式
  const backStyle = {
    backgroundColor: backColor,
    height: borderWidth,
  }

  // 显示进度的样式
  const coverStyle = {
    backgroundColor: color,
    width: `${percent}%`,
    height: borderWidth,
  }
  
  return (
    <div className="dyx-line-progress" style={backStyle}>
      <div className="dyx-line-progress" style={coverStyle} />
    </div>
  )  
}

export default LineProgress;

