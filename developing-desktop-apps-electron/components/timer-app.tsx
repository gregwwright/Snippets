import React = require('react');
import { ipcRenderer } from 'electron';
import { TimerClock } from './timer-clock';
import { TimerControls } from './timer-controls';

interface TimerAppState {
	startTime: number,
	stopTime: number,
	timerInterval: number
}

export class TimerApp extends React.Component<{}, TimerAppState> {

	constructor(props) {
		super(props);

		this.state = {
			startTime: null,
			stopTime: null,
			timerInterval: null
		};

		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
	}

	startTimer() {
		this.setState({
			startTime: Date.now(),
			stopTime: Date.now(),
			timerInterval: window.setInterval(() => {
				this.setState({
					stopTime: Date.now()
				} as TimerAppState)
			}, 50)
		});
	}

	stopTimer() {

		clearInterval(this.state.timerInterval);

		this.setState({
			timerInterval: null
		} as TimerAppState);
	}

	componentDidMount() {
		ipcRenderer.on('start-timer', this.startTimer);
		ipcRenderer.on('stop-timer', this.stopTimer);
	}

	componentWillUnmount() {
		ipcRenderer.removeListener('start-timer', this.startTimer);
		ipcRenderer.removeListener('stop-timer', this.stopTimer);
	}


	render() {
		return <div className="container-fluid">
			<TimerClock current={this.state.stopTime - this.state.startTime} />
			<TimerControls timerOn={!!this.state.timerInterval} start={this.startTimer} stop={this.stopTimer}  />
		</div>;
	}		

}