import React from 'react';

import style from './index.scss'

class CircularProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sqSize, percentage, strokeWidth, strokeFill } = this.props;
    if (!sqSize || !percentage || !strokeWidth || !strokeFill) {
      return null;
    }

    // sqSize - Size of the enclosing square
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (sqSize - strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - dashArray * percentage / 100;

    return (
      <svg
          width={sqSize}
          height={sqSize}
          viewBox={viewBox}>
          <circle
            className={style.circleBackground}
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`} />
          <circle
            className={style.circleProgress}
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            stroke={strokeFill}
            strokeWidth={`${strokeWidth}px`}
            // Start progress marker at 12 O'Clock
            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
            }} />
          <text
            className={style.circleText}
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle">
            {`${percentage}`}
          </text>
      </svg>
    );
  }
}

CircularProgressBar.defaultProps = {
  sqSize: 50,
  percentage: 0,
  strokeWidth: 5,
  strokeFill: "#0C8ED7"
};

export default CircularProgressBar;
