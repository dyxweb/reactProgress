import React from "react";
import Progress from '../../src/index.js'

const ProgressDemo = () => (
  <div>
    <h4>线状形式</h4>
    <Progress type="line" percent={25} />
    <h4>线状形式自定义颜色</h4>
    <Progress type="line" percent={50} color="#52c41a" backColor="#eee" />
    <h4>线状形式自定义边框宽度</h4>
    <Progress type="line" percent={75} borderWidth={10} />
    <h4>半圆形式</h4>
    <Progress type="semicircle" percent={25} />
    <h4>半圆形式自定义颜色</h4>
    <Progress type="semicircle" percent={50} color="#52c41a" backColor="#eee" />
    <h4>半圆形式自定义边框宽度</h4>
    <Progress type="semicircle" percent={75} borderWidth={10} />
    <h4>半圆形式自定义圆的半径</h4>
    <Progress type="semicircle" percent={75} radius={60} />
    <h4>整圆形式</h4>
    <Progress type="circle" percent={25} />
    <h4>整圆形式自定义颜色</h4>
    <Progress type="circle" percent={50} color="#52c41a" backColor="#eee" />
    <h4>整圆形式自定义边框宽度</h4>
    <Progress type="circle" percent={75} borderWidth={10} />
    <h4>整圆形式自定义圆的半径</h4>
    <Progress type="circle" percent={75} radius={60} />
  </div>
)

export default ProgressDemo;
