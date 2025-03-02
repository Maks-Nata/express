// const {sayhello}= require('./helper')
// sayhello()
// import {sayhello} from './helper.js';
// sayhello()
// console.log('dirname:',__dirname);
// console.log('filename:',__filename);
// console.log('process:',process.cwd())
const path = require('path');
const joinedpath = path.join(__dirname, 'test', 'helper.js');
console.log(joinedpath);
const normalizedPath = path.normalize('///test/helper.js');
console.log(normalizedPath);
const os = require('os');
console.log(os.arch())
console.log(os.cpus())
const fs = require('fs');
fs.readFile(path.join(__dirname, 'test', 'test.txt'), {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    console.log(data)
});
fs.writeFile(path.join(__dirname, 'test', 'test1.txt'), 'hello test1', (err) => {
    if (err) throw err
})