// process.env['NODE_ENV'] = 'production';

const express = require('express');
const app = express();

const method = require('./routes/method');
const echo = require('./routes/echo');
const statuscode = require('./routes/statuscode');
const redirect = require('./routes/redirect');
const cookies = require('./routes/cookies');
const delay = require('./routes/delay');

app.use('/', (req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use('/method', method);
app.use('/echo', echo);
app.use('/statuscode', statuscode);
app.use('/redirect', redirect);
app.use('/cookies', cookies);
app.use('/delay', delay);

const port = 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
