const http = require('http');

const server = http.createServer((req,res)=>{
    let id = Math.floor(Math.random()*10*1);
    let title = `Producto ${Math.floor(Math.random()*10+1)}`;
    let price = (Math.random()*10).toFixed(2);
    let thumbnail = `Foto ${Math.floor(Math.random()*10+1)}`

    const sendObj ={
        id,
        title,
        price,
        thumbnail
    }
    res.end(JSON.stringify(sendObj))
})

server.listen(8080, ()=>{
    console.log("Listening on port 8080")
})