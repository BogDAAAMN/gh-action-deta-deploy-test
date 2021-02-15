const express = require('express');

const app = express(); // instantiate express

app.get('/hey', async (req, res) => {
   res.send('hey gh again!!! Deta test yay!')
});

module.exports = app;
