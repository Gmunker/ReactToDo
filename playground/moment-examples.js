var moment = require('moment');

console.log(moment().format());

let now = moment();

console.log('Current Timestamp', now.unix());

const format1 = 'MMM D,YYYY @ h:mm a';
const format2 = 'MMMM Do, YYYY @ h:mm A'

let timestamp = 1475639935;
let currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format(format1));
console.log('current moment', currentMoment.format(format2));