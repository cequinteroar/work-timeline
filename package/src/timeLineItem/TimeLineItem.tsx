import * as React from "react";
import classnames from "classnames";
import "../style/timeLine.scss";

export interface TimeLineItemProps {
  year: number;
  activity: string;
  current?: boolean;
  distFactor?: number;
}

export const TimeLineItem: React.FC<TimeLineItemProps> = (props: TimeLineItemProps) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);

  const onMouseEnter = () => setIsSelected(true);

  const onMouseLeave = () => setIsSelected(false);

  let timeLineClassNames = classnames("timeline-item", { selected: isSelected }, { current: props.current });
  const width = props.distFactor ? props.distFactor.toString() + "%" : "10%";

  return (
    <div style={{ width: width, display: "flex", alignItems: "center" }}>
      <li className={timeLineClassNames} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      {isSelected && (
        <div className={"activity"}>
          <div className={"content"}>
            <h5>{props.year}</h5>
            <p>{props.activity}</p>
          </div>
        </div>
      )}
    </div>
  );
};

TimeLineItem.defaultProps = {
  current: false,
};
