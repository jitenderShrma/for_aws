const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// app init
const app = express();

// Connect to db...
const url = 'mongodb+srv://user:user@cluster0-mzfys.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true}, (err, result) => {
    if(err) throw err;
    console.log('connected to db...');
});

app.get('/api/demo', (req, res) => {
    console.log('get request');
    return res.send('ok');
});

// Listen to Server
const port = process.env.port || 5000;
app.listen(port, ()=> console.log(`server listen at port ${port}`));