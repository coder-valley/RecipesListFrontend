const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/foodieMe'));

app.get('/*', function (req, res) {
    console.log('server is listening')
    res.sendFile(path.join(__dirname + '/dist/foodieMe/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);