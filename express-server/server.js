const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

//Add listener who listen all request and map to internal handler
app.listen(PORT, function () {
  console.log("Listener has been initialized!!! " + PORT);
});


// Add code to test get request
app.get('/', function (request, response) {
  response.send('Hello From Express Server');
});

//add post request
app.post('/express-server/enroll', function (request, response) {
  console.log(request.body)
  response.status(200).send({'message': 'User enrolled successfully'});
})





