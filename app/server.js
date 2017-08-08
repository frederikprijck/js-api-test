'use strict';
const express = require('express');
const {getChartById, getCharts, getGraphsById, getGraphsForDate} = require('./routes/charts.js');

const app = express();

app.get('/charts', getCharts);
app.get('/charts/:id', getChartById);
app.get('/charts/:id/graphs', getGraphsById);
app.get('/charts/:id/graphs/:date', getGraphsForDate);

app.listen(3000);
console.log('Listening on port 3000...');
