const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/save', (req, res) => {
    const number = req.body.number;
    fs.appendFile('data.txt', number + '\n', (err) => {
        if (err) throw err;
        res.sendStatus(200);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
