const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const connecttomongo = require('./db.js');

connecttomongo();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})