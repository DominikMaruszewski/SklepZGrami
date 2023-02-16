require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        mongoose.set('strictQuery', true);

        console.log("MongoDB connections SUCCESS");
    }   catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
}; 

module.exports = connectDB;