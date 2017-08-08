'use strict';
const express = require('express');
const {getChartById, getCharts, getGraphsById, getGraphsForDate} = require('./routes/charts.js');

const startAppServer = port => {
  const app = express();

  app.get('/charts', getCharts);
  app.get('/charts/:id', getChartById);
  app.get('/charts/:id/graphs', getGraphsById);
  app.get('/charts/:id/graphs/:date', getGraphsForDate);

  return app.listen(port, function() {
    const {port} = this.address();
    console.log(`Listening on port ${port}…`);
  });
};

module.exports = startAppServer;
