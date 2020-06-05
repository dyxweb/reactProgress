import React, { Component } from "react";
import Progress from '../../src/index.js'

export default class ProgressDemo extends Component {

  render() {
    return (
      <div>
        <Progress type="semicircle" percent={50} color="red" backColor="#ebecf0" />
        <Progress type="semicircle" percent={30} borderWidth={10} />
        <Progress type="circle" percent={25} color="red" backColor="#ebecf0" />
        <Progress type="circle" percent={25} borderWidth={10} />
        <Progress type="circle" percent={0} />
        <Progress type="circle" percent={10} />
        <Progress type="circle" percent={20} />
        <Progress type="circle" percent={30} />
        <Progress type="circle" percent={40} />
        <Progress type="circle" percent={50} />
        <Progress type="circle" percent={60} />
        <Progress type="circle" percent={70} />
        <Progress type="circle" percent={80} />
        <Progress type="circle" percent={90} />
        <Progress type="circle" percent={100} />
      </div>
    )  
  }
}
