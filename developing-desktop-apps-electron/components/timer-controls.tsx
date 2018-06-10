import React = require('react');

const styles = require('./timer-controls.css');

interface TimerControlsProps {
	start: Function,
	stop: Function,
	timerOn: boolean
}

export class TimerControls extends React.Component<TimerControlsProps, {}> {

	render() {
		return <div className="row">
			<div className={`col-xs-12 col-sm-6 text-xs-center ${styles['control-container']}`}>
				<button disabled={this.props.timerOn} className="btn btn-primary" onClick={this.props.start}>Start</button>
			</div>
			<div className={`col-xs-12 col-sm-6 text-xs-center ${styles['control-container']}`}>
				<button className="btn btn-danger" onClick={this.props.stop}>Stop</button>
			</div>
		</div>;
	}

}