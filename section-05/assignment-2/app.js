const express = require('express');

const app = express();

// app.use('/', (req, res, next) => {
//     console.log('first middleware function');
//     next();
// });

// app.use('/', (req, res, next) => {
//     console.log('second middleware function');
//     res.send('<h1>Hello after travelling through 2 middleware functions');
// });


app.use('/users', (req, res, next) => {
    console.log('/user route');
    res.send('<ul><li>user1</li><li>user 2</li><li>user 3</li></ul>');
    console.log('what about it ?')
});

app.use('/', (req, res, next) => {
    console.log('/ route');
    res.send('<h1>hello from / routes</h1>')
    console.log('and this ?');
});

app.listen(3000);
