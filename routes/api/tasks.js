const express = require(`express`);
const router = express.Router();
const Task = require("../../models/Task");
const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const { query } = require("express");

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

// @route    GET api/tasks
// @desc     Get all tasks
// @access   Public
router.get("/", async(req,res) => {

    try{
        // Get all tasks and sort by date created
        const tasks = await Task.find().sort({created_at: -1});
        // Return tasks
        res.json(tasks);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// @route    PUT api/tasks/:taskId
// @desc     Update a task
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

});

// @route    PUT api/tasks/:taskId/complete
// @desc     Compelte a task
// @access   Public
router.put(`/:taskId/complete`, async(req,res) => {

    const objectId = mongoose.Types.ObjectId(req.params.taskId);

    try{

        const completedTask = await Task.findOneAndUpdate(
            {
                // Filter
                objectId
            },
            {
                // Update
                $set: {"completed": true, "completed_at": Date.now()}
            },
            {
                // Return updated document
                new: true
            }
        );

        // Send JSON
        res.json(completedTask);

    }catch(err){

         // Return error message and status code 500 (Unexpected condition)
         console.error(err.message);
         res.status(500).send(`Server error`);
    }
})

// @route    PUT api/tasks/:taskId/uncomplete
// @desc     Compelte a task
// @access   Public
router.put(`/:taskId/uncomplete`, async(req,res) => {


    const objectId = mongoose.Types.ObjectId(req.params.taskId);

    try{
 
        const uncompleteTask = await Task.findOneAndUpdate(
            {
                // Filter
                objectId
            },
            {
                // Update
                $set: {"completed": false, "completed_at": null}
            },
            {
                // Return updated document
                new: true
            }
        );

        // Return JSON
        res.json(uncompleteTask);



    }catch(err){


        // Return error message and status code 500 (Unexpected condition)
        console.error(err.message);
        res.status(500).send(`Server error`);
    }
});

// @route    GET api/tasks/filter
// @desc     Get task based on filter
// @access   Public
router.get("/filter", async(req,res) => {

    try{

        const task = await Task.find({completed: true } );

        res.json(task);


    }catch(err){

        // Return error message and status code 500 (Unexpected condition)
        console.error(err.message);
        res.status(500).send(`Server error`);

    }
})



module.exports = router;