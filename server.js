// server.js
import express from 'express';
import dotenv from 'dotenv';
import indexRouter from './index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Routes
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
