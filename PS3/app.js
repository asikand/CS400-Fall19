// Bring in our dependencies
const app = require('express')();

// CS400 PS3 Part 1A
// An instance of express.Router in a separate route file...
const routes = require('./routes');
// that is mounted on the path /ps3 (i.e. app.use(‘/ps3’…))
app.use('/ps3', routes);

// Set the view engine to pug (default?)
app.set('view engine', 'pug')

// Start the server on port 3000
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
