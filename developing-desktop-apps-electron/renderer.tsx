// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

require('css-modules-require-hook')({
	processCss: css => {
		var style = document.createElement('style');
		style.innerHTML = css;
		document.head.appendChild(style);
	} 
});


import React = require('react');
import ReactDOM = require('react-dom');

import { TimerApp } from './components/timer-app';

ReactDOM.render(<TimerApp />, document.querySelector('main'));