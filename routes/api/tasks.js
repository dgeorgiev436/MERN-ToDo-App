const express = require(`express`);
const router = express.Router();
const Task = require("../../models/Task");
const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');

// @route    POST api/tasks
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
        return res.status(400).json({errors: errors.array()});
    }

    try{
// Create new Task
        const newTask = new Task({
            title: req.body.title
        });
// Save new task
        const task = await newTask.save();

// Return new task in JSON
        res.json(task);

    }catch(err){
// Return error message and status code 500 (Unexpected condition)
        console.error(err.message);
        res.status(500).send(`Server error`);
    }
});

// @route    POST api/tasks/:taskId
// @desc     Create a task
// @access   Public
router.put(`/:taskId`,
check(`title`, `Please enter a title`).notEmpty(),
async(req,res) => {

// Get errors from express-validator
    const errors = validationResult(req);

// If errors are found return error status 400 with an array of the errors
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    };

// Get data from the post body 
    const {title, created_at} = req.body;

// Turn the ID into ObjectID data type
    const objectId = mongoose.Types.ObjectId(req.params.taskId);

    try{

// Use the findOneAndUpdate MongoDB method
// It takes three arguments
// 1 - Filter criteria
// 2 - The updated document
// 3 - A set of optional fields.
// "new: true" returns the updated document after execution 
        const updatedTask = await Task.findOneAndUpdate(
            {
                objectId
            },
            {
                $set: {"title": title, "created_at": created_at}
            },
            {
                new: true
            }
        );

        res.json(updatedTask);

    }catch(err){

// Return error message and status code 500 (Unexpected condition)
        console.error(err.message);
        res.status(500).send(`Server error`);
    }
});

// @route    DELETE api/tasks/:taskId
// @desc     Delete a task
// @access   Public
router.delete("/:taskId", async(req,res) => {
    try{
        
// Use the findOneAndUpdate MongoDB method
        const deletedTask = await Task.findByIdAndDelete(req.params.taskId)
// Return deleted task
        res.json(deletedTask);

    }catch(err){

// Return error message and status code 500 (Unexpected condition)
        console.error(err.message);
        res.status(500).send(`Server error`);
    }

})

module.exports = router;