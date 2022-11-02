var http = require('http')
var tools1 = require('./03_tool-add')

http.createServer((req,res)=>{

  res.writeHead(200,{
    "Content-Type": "text/html;charset=UTF-8"
  })

  res.write('<h1>showme</h1>')
  console.log(tools1.add(1,2,3,4));

  res.end()

}).listen(3000)