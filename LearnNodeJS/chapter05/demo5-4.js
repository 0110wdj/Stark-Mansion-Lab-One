// concat buffer
var buf = new Buffer('世上无难事，');
var buf1 = new Buffer('只怕有心人');
var buf2 = Buffer.concat([buf, buf1]);
console.log(buf2);
console.log(buf2.toString());