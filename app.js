const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Good noon to DevOpsTutor from owen@20240117.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);