const moment = require('moment');

let now = moment();
console.log(now.format());
document.querySelectorAll("#todayDate").value = now;