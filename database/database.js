
// const mongoose = require('mongoose')

// // External File
// // Functions (connection)
// // Make a unique function name
// // Export

// const connectDatabase = () => {
//     console.log("data")
//     try {
//         mongoose.connect(process.env.MONGODB_CLOUD).then(() => {
//             console.log("Database connected!")
//         })
//     }
//     catch {
//         console.log("Database not connected")
//     }
// }


// module.exports = connectDatabase 
const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        console.log("🔄 Connecting to MongoDB Atlas...");
        await mongoose.connect(process.env.MONGODB_CLOUD, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 // Prevent long waits
        });
        console.log("✅ Database connected successfully!");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        process.exit(1); // Stop the app if database connection fails
    }
};

module.exports = connectDatabase;
