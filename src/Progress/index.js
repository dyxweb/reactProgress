import React, { Component } from "react";
import PropTypes from 'prop-types';
import SemicircleProgress from './SemicircleProgress';
import CircleProgress from './CircleProgress';
import LineProgress from './LineProgress';

const comData = { semicircle: SemicircleProgress, circle: CircleProgress, line: LineProgress };

export default class Progress extends Component {
  static propTypes = {
    type: PropTypes.string,
    percent: PropTypes.number,
    color: PropTypes.string,
    backColor: PropTypes.string,
    borderWidth: PropTypes.number,
    radius: PropTypes.number,
  };

  static defaultProps = {
    type: 'semicircle',
    percent: 0,
    color: '#5584ff',
    backColor: '#ebecf0',
    borderWidth: 6,
    radius: 100,
  }
  render() {
    const { type, borderWidth } = this.props;
    let { percent, radius } = this.props;
    const MatchCom = comData[type] || SemicircleProgress;
    if (percent > 100 || percent < 0) {
      percent = 0;
    }
    if (radius < borderWidth) {
      radius = borderWidth;
    }
    return (
      <MatchCom {...this.props} percent={percent} radius={radius} />
    )  
  }
}
