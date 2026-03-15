import mongoose from "mongoose"
import "dotenv/config"

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL not found in .env file")
        }

        await mongoose.connect(process.env.MONGO_URL)

        console.log("MongoDB connected successfully ✅")
    } catch (error) {
        console.log("MongoDB connection error ❌", error.message)
        process.exit(1)
    }
}

export default connectDB