import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDb } from './conifg/dbConnection.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

dotenv.config();

// app config
const app = express();
const port = process.env.PORT || 3000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDb();

app.use('/images', express.static('uploads'))

// api endpoints
app.use('/api/food', foodRouter)
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
  res.send('API WORKING')
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
})