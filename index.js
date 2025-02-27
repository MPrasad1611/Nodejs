const app = require("http");
// const server=app.createServer((req,res)=>{
//     res.write("hello world")
//     res.end("response Provided")
// })
let obj = { name: "Prasad", city: "vizag" };
const server = app.createServer((req, res) => {
  res.writeHead(201, "responsive received", {
    "content-type": "application/json",
  });
  res.write(JSON.stringify(obj));
  res.end();
});
server.listen("3101", () => {
  console.log("it's Working");
});
