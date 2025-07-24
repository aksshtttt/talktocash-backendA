const express = require('express');
const cors = require('cors');
const indexRouter = require('./index.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
