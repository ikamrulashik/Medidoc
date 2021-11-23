const mongoose = require ('mongoose')
const express = require('express');
const app = express ();

const DB = 'mongodb+srv://ikamrulashik:bdashik97@cluster0.wfxmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log (`connection successful`);
}).catch((err) => console.log(`connection unsucessfull`));



app.get('/', (req, res) => {
    res.send (`Hello world`);
});

app.get('/about', (req, res) => {
    res.send (`Hello about`);
});

app.get('/contact', (req, res) => {
    res.send (`Hello contact`);
});

app.listen (4000, () => {
    console.log(`server is running at port 4000`);
})
