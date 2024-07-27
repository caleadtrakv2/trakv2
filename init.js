const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'uid', // Replace with your own secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  }));

// other modules init

const PORT = 8787;

// Import routes
const userRoutes = require('./src/routes/userRoutes');

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies


// Use routes

app.use('/api/trak/master',userRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


