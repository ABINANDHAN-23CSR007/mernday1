const path = require('path');
const basename = path.basename('F:\Mern day2\sample.txt');
console.log(basename);

const extension = path.extname("F:\Mern day2\sample.txt");
console.log(extension);

const join = path.join("folder","subfolder","sample1.txt");
console.log(join);