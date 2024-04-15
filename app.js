// app.js

const express = require('express');
const { exec } = require('child_process');

const app = express();

// Define route to handle button click
app.get('/start', (req, res) => {
    // Execute the start script
    exec('npm start', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing start script: ${error}`);
            res.status(500).send('Error executing start script');
            return;
        }
        console.log(`Start script output: ${stdout}`);
        res.send('Start script executed successfully');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
