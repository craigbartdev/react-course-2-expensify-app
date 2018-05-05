//learn more about express at expressjs.com
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;  //for heroku or not

app.use(express.static(publicPath));

app.get('*', (req, res) => { //* means all paths
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
});