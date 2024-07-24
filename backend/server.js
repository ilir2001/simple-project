// backend/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});


// Catch-all handler to serve the React app
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/backend/public', 'index.html'));
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
