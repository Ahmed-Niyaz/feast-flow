import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


export const connectDb = async () => {
    await mongoose.connect(process.env.MONGO).then(() => console.log('DB connected'))
}

// console.log(process.env.MONGO, 'got the url');
