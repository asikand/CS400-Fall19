// Bring in our dependencies
const app = require('express')();
const routes = require('./routes');

// Mounted on /ps4, uses routes from routes directory
app.use('/ps4', routes);

// Set the view engine to Pug
app.set('view engine', 'pug')

// Start the server on port 3000
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
