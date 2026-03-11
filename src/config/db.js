const mongoose = require("mongoose")


<<<<<<< HEAD
async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Server is connected to DB");
    } catch (err) {
        console.error("Error connecting to DB:", err.message);
        process.exit(1);
    }
=======

function connectToDB() {

    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("server is connected to DB")
        })
        .catch(err => {
            console.log("Error connecting to DB")
            process.exit(1)
        })

>>>>>>> main
}


module.exports = connectToDB