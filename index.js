
const express = require('express');
const logger = require('pino')();
const app = express()
const bodyParser = require("body-parser");
let rateLimit = require('express-rate-limit');


let router = require('./routes/order-routes')
const http = require('http').createServer(app);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, 
	limit: 5, 
    message: 'Too many requests from this IP, please try again in an hour!'
})

app.use(limiter)
app.use('/', router)


http.listen(3030, () => {
    logger.info(`Server is running at port 3030`);
})