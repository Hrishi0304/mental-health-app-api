const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

// Serve static files from the 'functions' directory
app.use(express.static('functions'));

app.get('/', (req, res) => {
    // Read and send the content of phq9.json
    res.json("Mental Health API");
});

app.get('/phq9', (req, res) => {
  // Read and send the content of phq9.json
  const phq9Data = require('./functions/phq9.json');
  res.json(phq9Data);
});

app.get('/gad7', (req, res) => {
  // Read and send the content of gad7.json
  const gad7Data = require('./functions/gad7.json');
  res.json(gad7Data);
});

app.get('/dass21', (req, res) => {
  // Read and send the content of dass21.json
  const dass21Data = require('./functions/dass21.json');
  res.json(dass21Data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

