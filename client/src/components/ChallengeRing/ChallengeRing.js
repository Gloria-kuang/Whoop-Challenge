import React, { Component } from "react";
import "./ChallengeRing.scss";

class ChallengeRing extends Component {
  state = {
    progress: 0
  };

  render() {
    const { radius, stroke } = this.props;
    const normalizedRadius = radius - stroke * 2;
    const circumference = this.normalizedRadius * 2 * Math.PI;
    const strokeDashoffset =
      this.circumference - (this.state.progress / 7) * circumference;
    return (
      // <div className="challenge-ring__outer">
      //   <div className="challenge-ring__inner">
      //     <h3 className="challenge-ring__text">Challenge 1 of 7 Completed</h3>
      //   </div>
      // </div>

      <svg class="progress-ring" height={radius * 2} width={radius * 2}>
        <circle
          class="progress-ring__circle"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference + "" + circumference}
          sstyle={{ strokeDashoffset }}
          strokeWidth={stroke}
        />
      </svg>
    );
  }
}

export default ChallengeRing;
