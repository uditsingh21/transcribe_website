// This is your Node.js server-side code
const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.post('/start-script', (req, res) => {
    exec('npm start', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    res.send('Script started successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
