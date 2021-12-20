const express = require ('express');
const connectDB = require('./config/db');
const config = require ('config');
const port = config.get('PORT');

const app = express();

// connect to db
connectDB();

app.use(express.json({ extended: false }))


app.listen(port, () => console.log(`Server running on port ${port}`));