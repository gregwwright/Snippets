import React = require('react');
const { utc } = require('moment');

const styles = require('./timer-clock.css');

interface TimerClockProps {
	current: number
}

export class TimerClock extends React.Component<TimerClockProps, {}> {

	render() {
		return <div className="row">
			<div className={`col-md-12 text-xs-center ${styles['clock-display']}`}>
				<h2>{utc(this.props.current).format('HH:mm:ss.SSS')}</h2>
			</div>
		</div>;
	}

}