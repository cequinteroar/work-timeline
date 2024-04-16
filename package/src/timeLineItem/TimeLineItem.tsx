import React from "react";
import { createPortal } from "react-dom";
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
  const _activityTarget = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    const onMouseEnter = () => setIsSelected(true);
    const onMouseLeave = () => setIsSelected(false);
    const onMouseMove = (event: MouseEvent) => {
      if (!_activityTarget.current) return;
      const cursorMovementArea = _activityTarget.current.getBoundingClientRect();
      const x = event.pageX;
      const y = event.pageY;
      console.log(x, y);
      console.log(cursorMovementArea);
      const xValidation = x > cursorMovementArea.left && x < cursorMovementArea.right;
      const yValidation = y > cursorMovementArea.top && y < cursorMovementArea.bottom;
      if (!xValidation || !yValidation) {
        console.log("khaaaa");
        // setIsSelected(false);
        onMouseLeave();
      }
    };

    _activityTarget?.current?.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mousemove", onMouseMove);
    _activityTarget?.current?.addEventListener("mouseleave", onMouseLeave);

    // Specify how to clean up after this effect:
    return function cleanup() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const timeLineClassNames = classnames("timeline-item", { selected: isSelected }, { current: props.current });

  const activityContent = (
    <div className={"activity"}>
      <div className={"content"}>
        <h5>{props.year}</h5>
        <p>{props.activity}</p>
      </div>
    </div>
  );

  return (
    <>
      <li className={timeLineClassNames} ref={_activityTarget} />
      {isSelected && createPortal(activityContent, _activityTarget.current as HTMLLIElement)}
    </>
  );
};

TimeLineItem.defaultProps = {
  current: false,
};
