const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', (req, res, next) => {
    console.log('/user route');
    res.sendFile(path.join(__dirname, 'views', 'users.html'));
    console.log('what about it ?')
});

app.use('/', (req, res, next) => {
    console.log('/ route');
    res.sendFile(path.join(__dirname, 'views', 'default.html'));
    console.log('and this ?');
});

app.listen(3000);
