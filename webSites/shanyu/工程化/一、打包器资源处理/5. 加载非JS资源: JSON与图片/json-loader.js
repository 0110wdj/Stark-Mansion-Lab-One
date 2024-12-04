module.exports = function (source) {
  // json loader
  let json = typeof source === "string" ? source : JSON.stringify(source);
  json = {
    _user: "snofly",
    ...JSON.parse(json)
  }
  return `module.exports = ${JSON.stringify(json)};`

  // less
  // const less = require("less");
  // const output = less.parse(source);
  // return output;
}