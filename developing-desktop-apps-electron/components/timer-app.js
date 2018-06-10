"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var electron_1 = require('electron');
var timer_clock_1 = require('./timer-clock');
var timer_controls_1 = require('./timer-controls');
var TimerApp = (function (_super) {
    __extends(TimerApp, _super);
    function TimerApp(props) {
        _super.call(this, props);
        this.state = {
            startTime: null,
            stopTime: null,
            timerInterval: null
        };
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }
    TimerApp.prototype.startTimer = function () {
        var _this = this;
        this.setState({
            startTime: Date.now(),
            stopTime: Date.now(),
            timerInterval: window.setInterval(function () {
                _this.setState({
                    stopTime: Date.now()
                });
            }, 50)
        });
    };
    TimerApp.prototype.stopTimer = function () {
        clearInterval(this.state.timerInterval);
        this.setState({
            timerInterval: null
        });
    };
    TimerApp.prototype.componentDidMount = function () {
        electron_1.ipcRenderer.on('start-timer', this.startTimer);
        electron_1.ipcRenderer.on('stop-timer', this.stopTimer);
    };
    TimerApp.prototype.componentWillUnmount = function () {
        electron_1.ipcRenderer.removeListener('start-timer', this.startTimer);
        electron_1.ipcRenderer.removeListener('stop-timer', this.stopTimer);
    };
    TimerApp.prototype.render = function () {
        return React.createElement("div", {className: "container-fluid"}, React.createElement(timer_clock_1.TimerClock, {current: this.state.stopTime - this.state.startTime}), React.createElement(timer_controls_1.TimerControls, {timerOn: !!this.state.timerInterval, start: this.startTimer, stop: this.stopTimer}));
    };
    return TimerApp;
}(React.Component));
exports.TimerApp = TimerApp;
//# sourceMappingURL=timer-app.js.map