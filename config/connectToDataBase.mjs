import 'dotenv/config';
import mongoose from 'mongoose';

const connectToDatabase = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Successfully Connected to MongoDB")
}

export default connectToDatabase;