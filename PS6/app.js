// Bring in our dependencies
const app = require('express')();
// Use body parser to parse the body of the request
const bodyParser = require('body-parser');
// Bring in routes defined in other files
const routes = require('./routes');

// An instance of express.Router in a separate route file that is mounted on
// the path /ps4 (i.e. app.use(‘/ps4’…)).
app.use('/ps6', routes);

// Use body-parser as middleware
app.use(bodyParser.json())

// Set the view engine to Pug
app.set('view engine', 'pug')

// Start the server on port 3000
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
