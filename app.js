const express = require(`express`);
const app = express();
const connectDB = require(`./config/db`);




// Connect to database
connectDB();


// Middleware for parsing incoming JSON requests
// It puts the parsed data in req.body
app.use(express.json());


// Defining routes
app.use('/api/tasks', require('./routes/api/tasks'));


app.get(`/`, (req,res) => {
    res.send("HELLO")
})

module.exports = app;
