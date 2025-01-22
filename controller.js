const Tasks = require('./model');
//getTask
const getTask = (req, res, next) => {
    Tasks.find()
        .then(response => {
            res.json({ response })
        })

        .catch(error => {
            res.json({ error })
        })
}

//addTask
const addTask = (req, res, next) => {
    const task = new Tasks({
        task: req.body.task,
    });

    task.save()
        .then(response => {
            res.json({ response })
        })

        .catch(error => {
            res.json({ error })
        })
}




exports.addTask = addTask;
exports.getTask = getTask;