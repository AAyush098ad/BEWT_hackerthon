const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like index.html, CSS, frontend JS)
app.use(express.static(path.join(__dirname, 'public'))); 
// Note: You might need to change 'public' to '/' if index.html is in the root

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
