import React from 'react';
import classnames from 'classnames';
import '../styles/time-line.css';

export interface Props {
    year: number,
    activity: string,
    current?: boolean,
    distFactor?: number
}

export interface State {
    selected: boolean

}

class TimeLineItem extends React.Component<Props, State> {

    static defaultProps = {
        current: false
    }

    constructor(props: any) {
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = { selected: false }
    }

    onMouseEnter() {
        this.setState({
            selected: true
        });
    }

    onMouseLeave() {
        this.setState({
            selected: false
        });
    }

    render() {
        let classNames = classnames('timeline-item',
            { 'selected': this.state.selected },
            { 'current': this.props.current });
        const width = this.props.distFactor ? this.props.distFactor.toString() + '%' : "10%";
        return (
            <div style={{ width: width, display: "flex", alignItems: "center" }}>
                <li className={classNames} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                </li>
                {this.state.selected &&
                    <div className={"activity"}>
                        <div className={"content"}>
                            <h5>{this.props.year}</h5>
                            <p>{this.props.activity}</p>
                        </div>

                    </div>}
            </div>
        );
    }
}

export default TimeLineItem;
