"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var utc = require('moment').utc;
var styles = require('./timer-clock.css');
var TimerClock = (function (_super) {
    __extends(TimerClock, _super);
    function TimerClock() {
        _super.apply(this, arguments);
    }
    TimerClock.prototype.render = function () {
        return React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-12 text-xs-center " + styles['clock-display']}, React.createElement("h2", null, utc(this.props.current).format('HH:mm:ss.SSS'))));
    };
    return TimerClock;
}(React.Component));
exports.TimerClock = TimerClock;
//# sourceMappingURL=timer-clock.js.map