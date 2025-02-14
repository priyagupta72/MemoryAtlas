
// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';

// import postRoutes from './routes/posts.js';
// import userRouter from "./routes/user.js";

// const app = express();

// app.use(express.json({ limit: '30mb', extended: true }))
// app.use(express.urlencoded({ limit: '30mb', extended: true }))
// app.use(cors());
// /* routes*/
// app.use('/posts', postRoutes);
// app.use("/user", userRouter);
// /*  Database connection write your userName and Password */
// //const CONNECTION_URL = 'mongodb+srv://Your UserName:Password@cluster0.4xze8.mongodb.net/mernstack?retryWrites=true&w=majority';
// const CONNECTION_URL = 'mongodb+srv://binod:binodpoudel@cluster0.4xze8.mongodb.net/mernstack?retryWrites=true&w=majority';
// const PORT = process.env.PORT|| 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);

// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import bodyParser from 'body-parser';

// import postRoutes from './routes/posts.js';
// import userRouter from './routes/user.js';

// const app = express();

// // Middleware
// app.use(bodyParser.json({ limit: '30mb', extended: true }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// app.use(cors());

// // ✅ Define the correct MongoDB connection string
// const PORT = process.env.PORT || 5000;
// const MONGO_URI = mongodb+srv://Memories:kEdG9hYtvLx9aJG7@cluster0.v34v3.mongodb.net/travel-memories?retryWrites=true&w=majority;

// // ✅ Connect to MongoDB
// mongoose
//   .connect(MONGO_URI, {
//     serverSelectionTimeoutMS: 5000, // Prevents long connection delays
//   })
//   .then(() => {
//     console.log('✅ MongoDB connected successfully!');
//     app.listen(PORT, () =>
//       console.log(✅ Server Running on: http://localhost:${PORT})
//     );
//   })
//   .catch((error) => {
//     console.error('❌ MongoDB connection error:', error.message);
//   });

// // ✅ Additional MongoDB connection event listeners (for debugging)
// mongoose.connection.on('connected', () => {
//   console.log('✅ Mongoose connected to MongoDB');
// });
// mongoose.connection.on('error', (err) => {
//   console.error('❌ Mongoose connection error:', err.message);
// });
// mongoose.connection.on('disconnected', () => {
//   console.warn('⚠ Mongoose disconnected from MongoDB');
// });

// // Routes
// app.use('/posts', postRoutes);
// app.use('/user', userRouter);



import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

// Import routes
import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';

const app = express();

// Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Define MongoDB URI directly (⚠ Not secure for production)
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://Memories:kEdG9hYtvLx9aJG7@cluster0.v34v3.mongodb.net/travel-memories?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Prevent long connection delays
  })
  .then(() => {
    console.log('✅ MongoDB connected successfully!');
    app.listen(PORT, () => console.log(`✅ Server Running on: http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
  });

// MongoDB connection event listeners
mongoose.connection.on('connected', () => {
  console.log('✅ Mongoose connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error:', err.message);
});
mongoose.connection.on('disconnected', () => {
  console.warn('⚠ Mongoose disconnected from MongoDB');
});

// Routes
app.use('/posts', postRoutes);
app.use('/user', userRouter);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Travel Memories API');
});
