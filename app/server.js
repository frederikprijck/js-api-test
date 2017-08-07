'use strict';
const express = require('express');
const charts = require('./routes/charts.js');

const app = express();

app.get('/charts', charts.findAll);
app.get('/charts/:id', charts.findById);
app.get('/charts/:id/graphs', charts.getGraphsById);
app.get('/charts/:id/graphs/:date', charts.getGraphsForDate);

app.listen(3000);
console.log('Listening on port 3000...');
