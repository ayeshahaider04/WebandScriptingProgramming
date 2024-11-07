const express = require('express');
const path = require('path');

const app = express();

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(dirname, 'public')));

// Import route
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Error handling (optional)
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Server running on http://localhost:${PORT}));
