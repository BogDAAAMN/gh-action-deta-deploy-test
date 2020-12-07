const express = require('express');

const app = express(); // instantiate express

app.get('/hey', async (req, res) => {
   res.send('hey gh again!!! from actions this time <3')
});

module.exports = app;
