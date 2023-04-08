var http = require("http");
var fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("file created sucessfully");
});
fs.readFile("welcome.txt", function (err, data) {
  if (err) throw err;
  console.log(data); //buffer line
  console.log(data.toString());
  console.log("file is read successfully");
});