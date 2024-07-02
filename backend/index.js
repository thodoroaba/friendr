const express = require('express');
const usersRouter = require('./routers/users.router');
const postsRouter = require('./routers/posts.router');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

//Routers
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  mongoose
    .connect("mongodb+srv://[USER]:[PASSWORD]@cluster0.wzmhqsd.mongodb.net/friendr?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log('Connected to DB and listening');
    })
    .catch((err) => console.log(err));
});
