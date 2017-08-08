'use strict';
const moment = require('moment');

const getChartById = (req, res) => {
  const {id} = req.params;
  let json;
  switch (id) {
    case '1':
      json = {id, name:'mysql', description:'MySQL Load'};
      break;
    case '2':
      json = {id, name:'cpu', description:'CPU system'};
      break;
    case '3':
      json = {id, name:'disk-sda01', description:'Disk Writes on /dev/sda01'};
      break;
    default:
      json = {id, name:null, description:null};
  }
  res.send(json);
};

const getCharts = (req, res) => {
  res.send([
    {id:1, name:'mysql'},
    {id:2, name:'cpu'},
    {id:3, name:'disk-sda01'}
  ]);
};

// BUGFIX :: where do we specify an id?
const getGraphsById = (req, res) => {
  const reqDate = moment();
  const mm = reqDate.add(1, 'months').format('MM');  // BUGFIX :: remove month increment?
  const yyyy = reqDate.year();
  const json = [
    {date:`${yyyy}-${mm}-01`, s1:31, s2:263, s3:159, s4:22, s5:270},
    {date:`${yyyy}-${mm}-02`, s1:14, s2:260, s3:158, s4:12, s5:276},
    {date:`${yyyy}-${mm}-03`, s1:24, s2:265, s3:164, s4:19, s5:269},
    {date:`${yyyy}-${mm}-04`, s1:23, s2:269, s3:168, s4:19, s5:276},
    {date:`${yyyy}-${mm}-05`, s1:25, s2:272, s3:168, s4:17, s5:279},
    {date:`${yyyy}-${mm}-06`, s1:5,  s2:259, s3:160, s4:3,  s5:283},
    {date:`${yyyy}-${mm}-07`, s1:5,  s2:257, s3:159, s4:4,  s5:288}
  ];
  res.send(json);
};

const getGraphsForDate = (req, res) => {
  const reqDate = moment(req.params.date).hour(1);  // BUGFIX :: remove hour set?
  const dd = reqDate.format('DD');
  const mm = reqDate.add(1, 'months').format('MM');  // BUGFIX :: remove month increment?
  const yyyy = reqDate.year();
  const date = `${yyyy}-${mm}-${dd}`;
  let json;
  switch (dd) {
    case '01':
      json = {date, s1:31, s2:263, s3:159, s4:22, s5:270};
      break;
    case '02':
      json = {date, s1:14, s2:260, s3:158, s4:12, s5:276};
      break;
    case '03':
      json = {date, s1:24, s2:265, s3:164, s4:19, s5:269};
      break;
    case '04':
      json = {date, s1:23, s2:269, s3:168, s4:19, s5:276};
      break;
    case '05':
      json = {date, s1:25, s2:272, s3:168, s4:17, s5:279};
      break;
    case '06':
      json = {date, s1:5,  s2:259, s3:160, s4:3,  s5:283};
      break;
    case '07':
      json = {date, s1:5,  s2:257, s3:159, s4:4,  s5:288};
      break;
    default:
      json = {date, s1:0,  s2:0,   s3:0,   s4:0,  s5:0};
  }
  res.send(json);
};

module.exports = {getChartById, getCharts, getGraphsById, getGraphsForDate};
