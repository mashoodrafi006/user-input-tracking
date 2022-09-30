import config from './config';
const server = require('./server');

server.listen(config.port, () => {
    console.log(`Server now listening at localhost: ${config.port}`);
});
