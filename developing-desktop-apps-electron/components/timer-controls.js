"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var styles = require('./timer-controls.css');
var TimerControls = (function (_super) {
    __extends(TimerControls, _super);
    function TimerControls() {
        _super.apply(this, arguments);
    }
    TimerControls.prototype.render = function () {
        return React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12 col-sm-6 text-xs-center " + styles['control-container']}, React.createElement("button", {disabled: this.props.timerOn, className: "btn btn-primary", onClick: this.props.start}, "Start")), React.createElement("div", {className: "col-xs-12 col-sm-6 text-xs-center " + styles['control-container']}, React.createElement("button", {className: "btn btn-danger", onClick: this.props.stop}, "Stop")));
    };
    return TimerControls;
}(React.Component));
exports.TimerControls = TimerControls;
//# sourceMappingURL=timer-controls.js.map