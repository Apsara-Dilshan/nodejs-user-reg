import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send();
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
