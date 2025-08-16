const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Verbindung
mongoose.connect('mongodb://localhost:27017/urlaubsplaner', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB verbunden'))
.catch((err) => console.log('MongoDB Verbindungsfehler: ', err));

// Beispielroute
app.get('/', (req, res) => {
  res.send('Willkommen zur Urlaubsplaner-App!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
