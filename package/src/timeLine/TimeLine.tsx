import React from "react";
import "../style/timeLine.scss";
import { TimeLineItem } from "../timeLineItem/TimeLineItem";

export interface TimeLineProps {
  data?: Array<any>;
}

export const TimeLine: React.FC<React.PropsWithChildren<TimeLineProps>> = ({ data, children }) => {
  let items = children;
  if (data) {
    // Width (%) to place equitatively the timeline points
    const length = 100 / data.length;
    items = data.map((d, i) => {
      return (
        <TimeLineItem
          key={i}
          distFactor={length}
          year={d.year}
          activity={d.activity}
          current={d.current ? d.current : false}
        />
      );
    });
  }
  return <ul className="timeline">{!data ? children : items}</ul>;
};
