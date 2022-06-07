const express = require(`express`);
const app = express();
const connectDB = require(`./config/db`);




// Connect to database
connectDB();


// Middleware for parsing incoming JSON requests
// It puts the parsed data in req.body
app.use(express.json());

// Defining routes

app.get(`/`, (req,res) => {
    res.send("HELLO")
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));