import React, { Component } from "react";
import PropTypes from 'prop-types';
import SemicircleProgress from './SemicircleProgress';
import CircleProgress from './CircleProgress';

const comData = { semicircle: SemicircleProgress, circle: CircleProgress };

export default class Progress extends Component {
  static propTypes = {
    type: PropTypes.string,
    percent: PropTypes.number,
    color: PropTypes.string,
    backColor: PropTypes.string,
  };

  static defaultProps = {
    type: 'semicircle',
    percent: 0,
    color: '#5584ff',
    backColor: '#ebecf0',
  }
  render() {
    const { type } = this.props;
    let { percent } = this.props;
    const MatchCom = comData[type] || SemicircleProgress;
    if (percent > 100 || percent < 0) {
      percent = 0;
    }
    return (
      <MatchCom {...this.props} percent={percent} />
    )  
  }
}
