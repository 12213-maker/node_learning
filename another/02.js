const url = require('url')
const http = require('http')

http.createServer((req,res)=>{

  
  function returnUsername(){
    if(req.url != '/favicon.ico'){
      const result = url.parse(req.url,true)

      console.log(url.format(result));
      return result.query.userName
    }
  }


  res.writeHead(200,{
    "Content-Type": "text/html;charset=UTF-8"
  })

  res.write(`<h1>${returnUsername()}</h1>`)

  res.end()

}).listen(3000)