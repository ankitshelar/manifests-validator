'use strict';
const fs = require('fs');
let rawdata = fs.readFileSync('assets/dummy.json');
let fruits = JSON.parse(rawdata);
console.log(fruits);