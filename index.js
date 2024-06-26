const express = require('express');
const usersRouter = require('./routers/users.router')

const app = express();
const port = 3000;

app.use(express.json());

//Routers
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})