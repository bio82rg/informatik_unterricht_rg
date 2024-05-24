const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Statische Dateien bereitstellen
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/save', (req, res) => {
    const number = req.body.number;
    const filePath = path.join(__dirname, 'data.txt');

    fs.appendFile(filePath, number + '\n', (err) => {
        if (err) {
            console.error('Fehler beim Speichern der Daten:', err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
