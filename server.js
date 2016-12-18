import config from './config';
import express from 'express';
// import fs from 'fs';

//create server
const server = express();

server.get('/', (req, res) => {
	res.send('Hello biatches!');
});

server.use(express.static('public'));

// server.get('/about.html', (req, res) => {
// 	fs.readFile('./about.html', (err, data) => {
// 		res.send(data.toString());	
// 	});	
// });

server.listen(config.port, () => {
	console.info('Express listening of port ' + config.port);
});