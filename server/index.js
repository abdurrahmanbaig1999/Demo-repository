import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';


// Connect to MongoDB
const app = express();  // initialize express app
app.use(express.json());  // connect 
app.use(cors());  // connect to cors
mongoose.connect('mongodb://localhost:27017/mernproject')  // connect to mongodb
  .then(() => console.log('MongoDB connected')) // if connected successfully then print this message
  .then(() => {
	app.listen(3001, () => console.log('Server running on port 3001')); // listen on port 3001 and  connect to
  })
  .catch((err) => {
	console.log(`Server Does Not Connect: ${err}`);
  });
