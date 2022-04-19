const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const DB = require('./fakeDB')

const path = require('path')

const PORT = 3001;
const app = express(); 

app.use(express.json());
app.use(morgan('dev'));

app.use(cors());

app.get('/', (req, res) => {
  const allAddress = DB
  res.json({allAddress})
})

app.listen(PORT, () => {
    console.log('Server start on port ', PORT)
})
