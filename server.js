// Setup empty JS object to act as endpoint for all routes
const projectdata = []

// Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express()

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'))
const port = 3000

// Spin up the server
app.listen(port, () => {
    // Callback to debug
    console.log('server is running on localhost: ' + port)
})
// Initialize all route with a callback function
app.get('/all', (req, res) => {
    // Callback function to complete GET '/all'
    res.send(projectdata)
})
// Post Route
app.post('/weather', (request,response) => {
    projectdata.temperature = request.body.temp;
    projectdata.date = request.body.date;
    projectdata.feeling = request.body.feeling;
    response.end();
    console.log(projectdata)
})
