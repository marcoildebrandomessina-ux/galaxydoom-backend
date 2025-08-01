const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Abilita CORS per tutte le origini
app.use(cors());

// Middleware
app.use(express.json());

// Connessione a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connesso a MongoDB'))
.catch(err => console.error('Errore di connessione a MongoDB:', err));

// Esempio di endpoint
app.get('/api/player', (req, res) => {
  res.json({ message: 'Collegamento al backend riuscito!' });
});

// Avvio server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
