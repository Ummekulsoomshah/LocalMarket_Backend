const http=require('http');
const app=require('./app');

const server=http.createServer(app)

PORT=3000
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})