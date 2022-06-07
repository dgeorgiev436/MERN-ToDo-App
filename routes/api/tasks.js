const express = require(`express`);
const router = express.Router();
const Task = require("../../models/Task");
const { check, validationResult } = require('express-validator');

// @route    POST api/tasksr
// @desc     Create a task
// @access   Public
router.post(`/`,
// Make sure title is entered with express-validator
check(`title`, `Please enter a title`).notEmpty(),
async(req,res) => {
// Get errors from express-validator
    const errors = validationResult(req);

// If errors are found return error status 400 with an array of the errors
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try{
// Create new Task
        const newTask = new Task({
            title: req.body.title
        })
// Save new task
        const task = await newTask.save();

// Return new task in JSON
        res.json(task)

    }catch(err){
// Return error message and status code 500 (Unexpected condition)
        console.error(err.message);
        res.status(500).send(`Server error`);
    }
})


module.exports = router;