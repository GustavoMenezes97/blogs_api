const express = require('express');
const LoginRouter = require('./routes/login.router');
const UserRouter = require('./routes/user.router');
const CategoryRouter = require('./routes/category.router');
const BlogPostRouter = require('./routes/blogPost.router');

// ...

const app = express();

app.use(express.json());

app.use('/login', LoginRouter);

app.use('/user', UserRouter);

app.use('/categories', CategoryRouter);

app.use('/post', BlogPostRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
