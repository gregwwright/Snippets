const express = require('express');
const widgetRouter = express.Router();

const path = require('path');
const db = require('../database').connect(path.join(__dirname, '..', 'widgets.json'));

widgetRouter.route('/widgets')
	.get(function(req, res) {

		db(con => con.getAll().then(widgets => res.json(widgets)));

	})
	.post(function(req, res) {
		db(con => con.insert(req.body).then(widget => res.json(widget)));
	});

widgetRouter.route('/widgets/:widgetId')
	.get(function(req, res) {

		db(con => con.get(parseInt(req.params.widgetId)).then(widgets => res.json(widgets)));

	})
	.put(function(req, res) {
		req.body.id = parseInt(req.params.widgetId);
		db(con => con.update(req.body).then(widget => res.json(widget)));
	})
	.delete(function(req, res) {

		db(con => con.delete(parseInt(req.params.widgetId)).then(widgets => res.json(widgets)));

	});

module.exports = widgetRouter;
