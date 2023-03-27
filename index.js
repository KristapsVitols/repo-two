const express = require('express');

const app = express();

app.listen(8001, () => {
    console.log('running 8002');
})

app.get('/', (req, res) => {
    res.send('hello 8002');
})