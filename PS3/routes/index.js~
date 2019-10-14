// Create an instance of an express router
const router = require('express').Router();

// Use body parser to parse the body of the request
const bodyParser = require('body-parser');

// Tell express to use body-parser as middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Root route (required), just displays a welcome message
router.get('/', (req, res) => {
	res.status(200).json({message: 'Welcome to CS400 PS3 assignment!'});
});

// A route using the GET method that returns a fixed string, which can be
// anything that you like. The response should be a JSON object with one
// key/value pair that is passed into a Pug template for rendering.
router.get('/fixedString', (req, res) => {
	let jsonObj = {string: 'U08237389'}
	res.status(200).render('fixedString', jsonObj);
});

// A route using the POST method that returns a similar response as b.
// above but gets its parameter from the request body rather than the URL
// string. The response should be a JSON object with two key/value pairs,
// one for the original string and the second for the length. Pass the object
// into a Pug template for rendering.
router.post('/stringLength', (req, res) => {
	let input = req.body.inputString
	let jsonObj = {string: input;, length: input.length}
	res.status(200).render('stringLength', jsonObj);
});

module.exports = router;
