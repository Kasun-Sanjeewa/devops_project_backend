const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');



app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);


app.get('/getTask', (req, res) => {
    controller.getTask((req, res, next) => {
        res.send();
    });
});


app.post('/addTask', (req, res) => {
    controller.addTask(req.body, (callback) => {
        res.send();
    });
});




app.use(express.json());

module.exports = app;
