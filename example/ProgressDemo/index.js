import React, { Component } from "react";
import Progress from '../../src/index.js'

export default class ProgressDemo extends Component {
  render() {
    return (
      <div>
        <h4>半圆形式</h4>
        <Progress type="semicircle" percent={25} />
        <h4>半圆形式自定义颜色</h4>
        <Progress type="semicircle" percent={50} color="red" backColor="#ebecf0" />
        <h4>半圆形式自定义边框宽度</h4>
        <Progress type="semicircle" percent={75} borderWidth={10} />
        <h4>整圆形式</h4>
        <Progress type="circle" percent={25} />
        <h4>整圆形式自定义颜色</h4>
        <Progress type="circle" percent={50} color="red" backColor="#ebecf0" />
        <h4>整圆形式自定义边框宽度</h4>
        <Progress type="circle" percent={75} borderWidth={10} />
      </div>
    )  
  }
}
