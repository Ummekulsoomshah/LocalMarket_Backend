
//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/server.js
const http = require('http');
const app = require('./app'); 

const server = http.createServer(app);

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

