// express server
const express = require('express');
const app = express();
const PORT = 3000;

/**connect mongoDB in the server */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongo-intel', { useNewUrlParser: true, useUnifiedTopology: true });

//middleware Cors
const cors = require('cors');
app.use(cors());
app.use(express.json());

// routes 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});