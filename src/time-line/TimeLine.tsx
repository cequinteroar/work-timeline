import React from 'react';
import '../styles/time-line.css';
import TimeLineItem from './TimeLineItem';


export interface Props {
    data?: Array<any>
}

class TimeLine extends React.Component<Props> {
    render() {
        let items = this.props.children;
        const data = this.props.data;
        if (data) {
            // Width (%) to place equitatively the timeline points
            const length = 100/data.length;
            items = data.map((d, i) => {
                return <TimeLineItem key={i} distFactor={length} year={d.year}
                    activity={d.activity} current={d.current ? d.current : false} />;
            });
        }
        return (
            <div className="container">
                <ul className="timeline">
                    {!this.props.data ? this.props.children : items}
                </ul>
            </div>
        );
    }
}

export default TimeLine;

