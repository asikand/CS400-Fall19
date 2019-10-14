// Bring in our dependencies
const app = require('express')();
const routes = require('./ps3');

//  Connect all our routes to our application
app.use('/ps3', routes);

// Turn on that server!
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
