import React, { Component } from "react";
import PropTypes from 'prop-types';
import './index.css';

export default class SemicircleProgress extends Component {
  static propTypes = {
    percent: PropTypes.number,
    borderWidth: PropTypes.number,
    color: PropTypes.string,
    backColor: PropTypes.string,
  };

  static defaultProps = {
    percent: 0,
    borderWidth: 4,
    color: '#5584ff',
    backColor: '#ebecf0',
  }
  render() {
    const { color, backColor, percent, borderWidth } = this.props;
    const rotateAngle = (1 - (percent / 100)) * 180;
    // 底部背景的样式
    const backStyle = {
      borderColor: backColor,
      borderWidth: borderWidth,
    }

    // 显示进度的样式
    const coverStyle = {
      borderColor: color,
      transform: `rotate(-${rotateAngle}deg)`,
      borderWidth: borderWidth,
    }
    
    return (
      <div className="dyx-semi-progress-box">
        <div className="dyx-semi-common-progress dyx-semi-back-progress" style={backStyle}  />
        <div className="dyx-semi-common-progress dyx-semi-cover-progress" style={coverStyle} />
      </div>
    )  
  }
}
