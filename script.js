//const moment = require('moment');

let now = moment().format('MM DD YYYY');
console.log(now.format());
//document.querySelector("#todayDate").textContent = "test";
document.querySelector("#todayDate").textContent = now;