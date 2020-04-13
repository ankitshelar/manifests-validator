'use strict';
const fs = require('fs');
let rawdata = fs.readFileSync('assets/manifests/dummy.json');
let fruits = JSON.parse(rawdata);
console.log(fruits);