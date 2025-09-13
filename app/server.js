const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Argo CD Demo App running on AWS EKS!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
