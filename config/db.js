const mongoose = require(`mongoose`);
const config = require(`config`);
const db = config.get("mongoURI");

// Connect to database
const connectDB = async() => {
    try{
        await mongoose.connect(db, {});
        console.log(`MongoDB is connected`);

    }catch(err) {

        // Print Error
        console.log(err.message);

        // Exit with Uncought Fatal Exception  and status code of 1
        process.exit(1);
    }
}


module.exports = connectDB;