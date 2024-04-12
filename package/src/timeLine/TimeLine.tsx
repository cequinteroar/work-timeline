import React from "react";
import "../style/timeLine.scss";
import { TimeLineItem } from "../timeLineItem/TimeLineItem";

export interface TimeLineProps {
  data?: Array<any>;
}

export const TimeLine: React.FC<TimeLineProps> = (
  props: TimeLineProps & {
    children?: React.ReactNode;
  }
) => {
  let items = props.children;
  const data = props.data;
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
  return (
    <div className="container">
      <ul className="timeline">{!props.data ? props.children : items}</ul>
    </div>
  );
};
