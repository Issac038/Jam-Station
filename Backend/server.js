const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connection successful'))
.catch(() => console.log('MongoDB connection error'));

app.get('/', (req, res) => {
  res.send('This is the backend server!'); //just a simple route to test the server
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
