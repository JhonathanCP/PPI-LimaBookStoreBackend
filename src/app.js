import express from 'express';
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json('welcome to express');
})

export default app;
